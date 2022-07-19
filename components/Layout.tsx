import Head from "next/head";
import { useRouter } from "next/router";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ children, page }) {
  const router = useRouter();
  const title = "Code Youngstown";
  const description =
    "Connecting software engineers, developers, and coders in the Youngstown, OH area. Join the ongoing chat via Slack and attend our meetups.";
  const pageTitle = page == "Home" ? title : `${page} | ${title}`;

  return (
    <div className="bg-cy-gray text-white text-center flex-auto">
      <Head>
        {/*Thanks to https://megatags.co/ for generating these*/}
        <title>{pageTitle}</title>

        {/* <!-- Primary Meta Tags --> */}
        <meta name="title" content={title} />
        <meta name="description" content={description} />
        <link rel="icon" href="/code-youngstown-white-background-final.png" />
        <meta name="keywords" content="code, youngstown, code youngstown" />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content={"https://codeyoungstown.com" + router.asPath}
        />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta
          property="og:image"
          content="/code-youngstown-white-background-final.png"
        />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content={"https://codeyoungstown.com" + router.asPath}
        />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
        <meta
          property="twitter:image"
          content="/code-youngstown-white-background-final.png"
        />

        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="min-h-screen">
        {/* add <Header /> when ready */}

        <main>{children}</main>

        <Footer />
      </div>
    </div>
  );
}
