import {
  faCalendarDay,
  faLocationDot,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export interface EventRecord {
  id: string;
  title: string;
  description: string;
  dateTime: string;
  endTime: string | null;
  location: string;
  attendeeCount?: number | null;
  attendeeCountIsApproximate?: boolean;
  status: string;
  imageUrl: string | null;
  sourceUrl?: string | null;
  sourceLabel?: string | null;
}

const dateFormatter = new Intl.DateTimeFormat("en-US", {
  weekday: "short",
  month: "short",
  day: "numeric",
  year: "numeric",
  hour: "numeric",
  minute: "2-digit",
  timeZone: "America/New_York",
  timeZoneName: "short",
});

const monthFormatter = new Intl.DateTimeFormat("en-US", {
  month: "short",
  timeZone: "America/New_York",
});

const dayFormatter = new Intl.DateTimeFormat("en-US", {
  day: "numeric",
  timeZone: "America/New_York",
});

export function eventYear(event: EventRecord) {
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    timeZone: "America/New_York",
  }).format(new Date(event.dateTime));
}

export default function EventCard({
  event,
  expanded = false,
}: {
  event: EventRecord;
  expanded?: boolean;
}) {
  const date = new Date(event.dateTime);
  const paragraphs = event.description.split(/\n\s*\n/).filter(Boolean);
  const showSource = event.sourceUrl && event.sourceLabel;
  const details = paragraphs.length > 0 && (
    <div className="space-y-3 whitespace-pre-line leading-relaxed text-gray-300">
      {paragraphs.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
    </div>
  );

  return (
    <article className="overflow-hidden rounded-xl border border-gray-700 bg-black/10 text-left shadow-lg">
      <div className="flex gap-4 p-5 sm:p-6">
        <div className="flex h-20 w-16 flex-none flex-col items-center justify-center rounded-lg bg-white text-cy-gray shadow">
          <span className="text-sm font-bold uppercase text-red-700">
            {monthFormatter.format(date)}
          </span>
          <span className="text-3xl font-bold leading-none">
            {dayFormatter.format(date)}
          </span>
        </div>

        <div className="min-w-0 flex-1">
          <h3 className="text-xl font-semibold leading-tight text-white sm:text-2xl">
            {event.title}
          </h3>
          <div className="mt-3 space-y-2 text-sm text-gray-300 sm:text-base">
            <p className="flex items-start gap-2">
              <FontAwesomeIcon
                className="mt-1 w-4 flex-none"
                icon={faCalendarDay}
              />
              <time dateTime={event.dateTime}>{dateFormatter.format(date)}</time>
            </p>
            {event.location && (
              <p className="flex items-start gap-2">
                <FontAwesomeIcon
                  className="mt-1 w-4 flex-none"
                  icon={faLocationDot}
                />
                <span>{event.location}</span>
              </p>
            )}
            {typeof event.attendeeCount === "number" && (
              <p className="flex items-start gap-2">
                <FontAwesomeIcon
                  className="mt-1 w-4 flex-none"
                  icon={faUsers}
                />
                <span>
                  {event.attendeeCountIsApproximate ? "About " : ""}
                  {event.attendeeCount}{" "}
                  {event.attendeeCount === 1 ? "attendee" : "attendees"}
                </span>
              </p>
            )}
          </div>
        </div>
      </div>

      {(details || showSource) && (
        <div className="border-t border-gray-700 bg-black/10 px-5 py-4 sm:px-6">
          {details &&
            (expanded ? (
              details
            ) : (
              <details className="group">
                <summary className="cursor-pointer select-none font-semibold text-gray-200 hover:text-white">
                  Event details
                </summary>
                <div className="mt-4">{details}</div>
              </details>
            ))}
          {showSource && (
            <a
              className="mt-4 inline-block font-semibold text-white underline decoration-gray-500 underline-offset-4 hover:decoration-white"
              href={event.sourceUrl}
              rel="noreferrer"
              target="_blank"
            >
              View source: {event.sourceLabel}
            </a>
          )}
        </div>
      )}
    </article>
  );
}
