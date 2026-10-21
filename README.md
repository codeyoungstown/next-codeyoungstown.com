# CodeYoungstown.com

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app). It is styled with [Tailwind CSS](https://tailwindcss.com) and hosted on [Vercel](https://vercel.com).

## Run locally

Use Node.js 22 or newer, then install the locked dependencies:

```bash
npm ci
npm run dev
```

Copy `.env.example` to `.env.local` and add a current Slack invite URL to test
the complete join flow. When `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` is unset in
development, the `/slack` page skips Google reCAPTCHA but still validates the
location answer on the server.

## Slack invitation security

The public URL to share is `https://codeyoungstown.com/slack`. The actual Slack
invite is stored only in `SLACK_INVITE_URL`; never add it to browser code or
commit it to the repository.

Production requires these Vercel environment variables:

- `SLACK_INVITE_URL`: the current `https://join.slack.com/.../shared_invite/...`
  URL.
- `NEXT_PUBLIC_RECAPTCHA_SITE_KEY`: the public reCAPTCHA Enterprise site key.
- `GOOGLE_CLOUD_PROJECT_ID`: the Google Cloud project containing the key.
  `NEXT_PUBLIC_PROJECT_ID` remains supported for the existing deployment.
- `GOOGLE_SERVICE_KEY`: the base64-encoded Google service-account JSON.
- `RECAPTCHA_ALLOWED_HOSTNAMES`: optional comma-separated hostname override;
  defaults to `codeyoungstown.com,www.codeyoungstown.com`.
- `RECAPTCHA_MIN_SCORE`: optional score threshold; defaults to `0.6`.

The `/api/slack-invite` endpoint validates the honeypot, location answer,
reCAPTCHA token, token hostname, and risk score in one server-side request. It
returns the invite only as a non-cacheable redirect after those checks pass.

In Vercel Firewall, add a rate-limit rule for the request path
`/api/slack-invite` (a starting point is five requests per IP per hour), and
enable the Bot Protection managed ruleset in Challenge mode. Monitor denials
before tightening the limit so shared office and campus networks are not
blocked unnecessarily.

Slack invite links are revocable bearer credentials. Deactivate and replace a
link after exposure or abuse, update only `SLACK_INVITE_URL`, and continue
sharing the stable `/slack` URL.

## Refresh the event archive

Past Code Youngstown events are stored in `data/events.json` so the archive is
available at build time. The importer combines Meetup's public event feed with
the pre-Meetup records maintained in `data/historical-events.json`. Refresh the
generated archive with:

```bash
npm run scrape:events
```

Site-managed events are maintained in `data/upcoming-events.json`. The homepage
and Events page merge those records with `data/events.json`, deduplicate by ID,
and classify them by date on each page request. The upcoming section is sorted
oldest first; the past section is newest first. An event becomes past at its
end time, or at its start time when no end time is available. Source filenames
and stale status labels do not control these sections. When no future or ongoing
events remain, the upcoming section displays "Nothing announced yet".
Finished site-managed records may stay in this file; no manual move or new
deployment is required for them to appear under Past Events.

## Event subscriptions

The Events page links to `/events.ics` (calendar subscription) and `/rss.xml`
(RSS announcements). Both are served from the checked-in event data and update
when a new version of the site is deployed. Feed responses can be cached for
five minutes; subscribers refresh on their calendar or RSS app's schedule.

Both feeds include the complete archive and site-managed events, deduplicated
by `id`, with site-managed entries taking precedence. RSS sorts by announcement
time when known, otherwise by event time; an unknown publication date is omitted
rather than invented. Each feed item links to its event on the Events page.

When adding or editing an event:

- Keep `id` unchanged when rescheduling or renaming it, including when moving it
  into the archive. IDs identify calendar entries and RSS items permanently.
  Before removing a finished announcement from `upcoming-events.json`, move
  its complete record into `data/historical-events.json` with status `PAST`,
  then run `npm run scrape:events` to rebuild the archive. Keep its publication
  and revision metadata. Do not edit only the generated `data/events.json`,
  since the next scrape overwrites it. Keep cancelled events in the same way.
- Add `publishedAt` as an ISO timestamp with an offset when first announcing it.
  Keep that timestamp when editing or archiving. The existing announcement uses
  its first repository publication commit timestamp.
- Set `updatedAt` to the edit's ISO timestamp and increment `sequence` (starting
  at 1) when changing calendar details. Imported legacy calendar entries use the
  archive's `scrapedAt` timestamp until explicit metadata is available.
- Use `status: "CANCELLED"` for cancellations and retain the record so calendar
  subscribers can receive the cancellation.
- Supply `endTime` when known. A null end time is omitted from the calendar;
  no duration is guessed. Event timestamps include UTC offsets and are exported
  as UTC, so calendar apps display them in the viewer's timezone.

Subscribe by URL to receive future updates; importing a downloaded `.ics` file
creates a one-time copy. The calendar button opens `webcal://`; apps that do not
handle that protocol can use `https://codeyoungstown.com/events.ics` directly.

Run `npm test` for feed formatting, timezone, identity, and cancellation checks
(Node 22.18+ or Node 24 is needed for the native TypeScript test loader).
