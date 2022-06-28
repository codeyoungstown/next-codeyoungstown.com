import Head from "next/head";
import { useRouter } from "next/router";
import { Footer } from "./Footer";
import { Header } from "./Header";

export function Layout({ title, description, children }) {
  const router = useRouter();

  return (
    <div className="max-w-screen-lg m-auto p-4 pb-1 min-h-screen flex flex-col">
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />

        <link rel="icon" href="/favicon.ico" />

        {/* <!-- Primary Meta Tags --> */}
        <title>{title}</title>
        <meta name="title" content={title} />
        <meta name="description" content={description} />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content={"https://JoeDuncko.com" + router.asPath}
        />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        {/* <meta property="og:image" content="" /> */}

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content={"https://JoeDuncko.com" + router.asPath}
        />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
        {/* <meta property="twitter:image" content="" /> */}
      </Head>

      <Header />

      <main className="flex-grow flex flex-col">{children}</main>

      <Footer />
    </div>
  );
}
