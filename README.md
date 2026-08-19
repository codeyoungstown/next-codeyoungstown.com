# CodeYoungstown.com

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app). It is styled with [Tailwind CSS](https://tailwindcss.com) and hosted on [Vercel](https://vercel.com). 

## Run locally
```bash
npm install
npm run dev
```

No environment variables are required for local development. When
`NEXT_PUBLIC_RECAPTCHA_SITE_KEY` is unset in development, the Slack link skips
Google reCAPTCHA and continues to the location prompt. Deployed environments
still require the site key and Google Cloud credentials.

## Refresh the event archive

Past Code Youngstown events are stored in `data/events.json` so the archive is
available at build time. The importer combines Meetup's public event feed with
the pre-Meetup records maintained in `data/historical-events.json`. Refresh the
generated archive with:

```bash
npm run scrape:events
```

Upcoming events are maintained directly in `data/upcoming-events.json`. Entries
there appear in chronological order in the shared "Next events" section on both
the home page and the event archive. An empty array displays the standard
"Nothing announced yet" state.
