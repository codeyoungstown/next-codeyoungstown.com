const MAILCHIMP_SUBSCRIBE_URL =
  "https://codeyoungstown.us20.list-manage.com/subscribe/post?u=440bcedf2717c000abf7f0a6d&id=f7093dcc8c&f_id=007759e6f0";

export default function NewsletterSignup() {
  return (
    <section
      aria-label="Event email signup"
      className="mx-auto w-full max-w-xl px-4 pb-0 pt-2 sm:px-8"
    >
      <div className="text-center">
        <div className="mx-auto max-w-md">
          <p className="text-sm text-gray-400">
            Get notified about Code Youngstown events.
          </p>

          <form action={MAILCHIMP_SUBSCRIBE_URL} className="mt-3" method="post">
            <label className="sr-only" htmlFor="newsletter-email">
              Email address
            </label>
            <div className="flex flex-col gap-2 sm:flex-row">
              <input
                autoCapitalize="none"
                autoComplete="email"
                className="min-w-0 flex-1 rounded-md border-gray-700 bg-black/20 px-3 py-2 text-sm text-white placeholder:text-gray-500 focus:border-gray-400 focus:ring-gray-400"
                id="newsletter-email"
                name="EMAIL"
                placeholder="Email address"
                required
                type="email"
              />
              <button
                className="rounded-md bg-gray-300 px-4 py-2 text-sm font-semibold text-gray-900 transition hover:bg-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-cy-gray"
                type="submit"
              >
                Subscribe
              </button>
            </div>

            <div aria-hidden="true" className="absolute left-[-10000px]">
              <label htmlFor="newsletter-company">Company</label>
              <input
                autoComplete="off"
                id="newsletter-company"
                name="b_440bcedf2717c000abf7f0a6d_f7093dcc8c"
                tabIndex={-1}
                type="text"
              />
            </div>
          </form>

          <a
            aria-label="Mailchimp — email marketing"
            className="mt-3 inline-flex rounded bg-white px-2 opacity-60 transition hover:opacity-100"
            href="https://eepurl.com/iQOnN2"
            rel="noreferrer"
            target="_blank"
          >
            {/* Mailchimp requires its generated referral badge on Free plans. */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt="Intuit Mailchimp"
              className="h-6 w-auto"
              height="40"
              src="https://digitalasset.intuit.com/render/content/dam/intuit/mc-fe/en_us/images/intuit-mc-rewards-text-dark.svg"
              width="220"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
