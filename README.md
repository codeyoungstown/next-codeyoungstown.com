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

Upcoming events are maintained directly in `data/upcoming-events.json`. Entries
there appear in chronological order in the shared "Upcoming events" section on
both the home page and the event archive. An empty array displays the standard
"Nothing announced yet" state.
