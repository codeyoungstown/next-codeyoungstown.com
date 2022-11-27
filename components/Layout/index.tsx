import Head from "next/head";
import { useRouter } from "next/router";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ children, page, description }) {
  const router = useRouter();
  const title = "Code Youngstown";
  const pageTitle = page == "Home" ? title : `${page} | ${title}`;

  return (
    <div className="bg-cy-gray text-white text-center flex-auto">
      <Head>
        {/*Thanks to https://megatags.co/ for generating these*/}
        <title>{pageTitle}</title>

        {/* <!-- Primary Meta Tags --> */}
        <meta name="title" content={pageTitle} />
        <meta name="description" content={description} />
        <link rel="icon" href="/code-youngstown-white-fill.png" />
        <meta name="keywords" content="code, youngstown, code youngstown" />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content={"https://codeyoungstown.com" + router.asPath}
        />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={description} />
        <meta
          property="og:image"
          content="https://codeyoungstown.com/code-youngstown-white-background-final.png"
        />

        {/* <!-- Twitter --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={description} />
        <meta
          name="twitter:image"
          content="https://codeyoungstown.com/code-youngstown-white-background-final.png"
        />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="min-h-screen m-auto relative">
        <Header />

        {/* Page Container */}
        <div className="flex justify-center h-full">
          <main className="w-full max-w-7xl pb-28">{children}</main>
        </div>

        <Footer />
      </div>
    </div>
  );
}
