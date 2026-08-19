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
