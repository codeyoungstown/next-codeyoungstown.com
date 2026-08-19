import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const MEETUP_GRAPHQL_URL = "https://www.meetup.com/gql2";
const GROUP_URLNAME = "code-youngstown";
const PAGE_SIZE = 50;

const query = `
  query CodeYoungstownPastEvents(
    $urlname: String!
    $after: String
    $beforeDateTime: DateTime!
    $first: Int!
  ) {
    groupByUrlname(urlname: $urlname) {
      events(
        filter: {
          status: [ACTIVE, PAST, CANCELLED]
          beforeDateTime: $beforeDateTime
        }
        sort: DESC
        first: $first
        after: $after
      ) {
        totalCount
        pageInfo {
          endCursor
          hasNextPage
        }
        edges {
          node {
            id
            title
            description
            dateTime
            endTime
            status
            eventType
            isOnline
            venue {
              name
              address
              city
              state
              country
            }
            featuredEventPhoto {
              highResUrl
            }
            displayPhoto {
              highResUrl
            }
          }
        }
      }
    }
  }
`;

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const outputPath = resolve(projectRoot, "data/events.json");
const historicalEventsPath = resolve(
  projectRoot,
  "data/historical-events.json"
);

function normalizeEvent(event) {
  const venueParts = [
    event.venue?.name,
    event.venue?.address,
    event.venue?.city,
    event.venue?.state,
    event.venue?.country?.toUpperCase(),
  ].filter(Boolean);

  return {
    id: event.id,
    title: event.title,
    description: event.description?.trim() || "",
    dateTime: event.dateTime,
    endTime: event.endTime || null,
    location: event.isOnline ? "Online" : venueParts.join(", "),
    status: event.status,
    imageUrl:
      event.featuredEventPhoto?.highResUrl ||
      event.displayPhoto?.highResUrl ||
      null,
  };
}

async function fetchPage(after, beforeDateTime) {
  const response = await fetch(MEETUP_GRAPHQL_URL, {
    method: "POST",
    headers: {
      accept: "application/json",
      "content-type": "application/json",
      "apollographql-client-name": "codeyoungstown.com-event-archive",
    },
    body: JSON.stringify({
      operationName: "CodeYoungstownPastEvents",
      query,
      variables: {
        urlname: GROUP_URLNAME,
        after,
        beforeDateTime,
        first: PAGE_SIZE,
      },
    }),
  });

  if (!response.ok) {
    throw new Error(
      `Meetup returned ${response.status} ${response.statusText}`
    );
  }

  const payload = await response.json();
  if (payload.errors?.length) {
    throw new Error(
      `Meetup GraphQL error: ${payload.errors
        .map((error) => error.message)
        .join("; ")}`
    );
  }

  const connection = payload.data?.groupByUrlname?.events;
  if (!connection) {
    throw new Error("Meetup did not return the Code Youngstown event feed");
  }

  return connection;
}

async function main() {
  const scrapedAt = new Date().toISOString();
  const historicalEvents = JSON.parse(
    await readFile(historicalEventsPath, "utf8")
  );
  const events = [];
  const seenCursors = new Set();
  let after = null;
  let totalCount = null;

  do {
    const page = await fetchPage(after, scrapedAt);
    totalCount = page.totalCount;
    events.push(...page.edges.map(({ node }) => normalizeEvent(node)));
    const nextCursor = page.pageInfo.hasNextPage
      ? page.pageInfo.endCursor
      : null;
    if (nextCursor && seenCursors.has(nextCursor)) {
      throw new Error("Meetup returned a repeated pagination cursor");
    }
    if (nextCursor) seenCursors.add(nextCursor);
    after = nextCursor;
  } while (after);

  const uniqueEvents = Array.from(
    new Map(events.map((event) => [event.id, event])).values()
  ).sort((a, b) => b.dateTime.localeCompare(a.dateTime));

  if (uniqueEvents.length !== totalCount) {
    throw new Error(
      `Incomplete Meetup archive: expected ${totalCount} events, received ${uniqueEvents.length}`
    );
  }

  const allEvents = [...uniqueEvents, ...historicalEvents].sort((a, b) =>
    b.dateTime.localeCompare(a.dateTime)
  );
  const uniqueIds = new Set(allEvents.map((event) => event.id));
  if (uniqueIds.size !== allEvents.length) {
    throw new Error("The combined archive contains duplicate event IDs");
  }

  for (const event of allEvents) {
    if (!event.id || !event.title || !event.dateTime) {
      throw new Error(`Archive event ${event.id || "unknown"} is incomplete`);
    }
  }

  await mkdir(dirname(outputPath), { recursive: true });
  await writeFile(
    outputPath,
    `${JSON.stringify(
      {
        sourceNames: ["Meetup archive", "Code Youngstown retrospective"],
        scrapedAt,
        totalCount: allEvents.length,
        meetupCount: uniqueEvents.length,
        historicalCount: historicalEvents.length,
        events: allEvents,
      },
      null,
      2
    )}\n`,
    "utf8"
  );

  console.log(
    `Saved ${allEvents.length} events (${uniqueEvents.length} from Meetup, ${historicalEvents.length} historical) to ${outputPath}`
  );
}

main().catch((error) => {
  console.error(error.message);
  process.exitCode = 1;
});
