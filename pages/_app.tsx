import "../styles/globals.css";
import "@fontsource/open-sans"; // Defaults to weight 400.
// font awesome config
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false; // https://fontawesome.com/v5.15/how-to-use/on-the-web/using-with/react#nextjs
import Script from "next/script";

function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Script
        src="https://sa.codeyoungstown.com/latest.js"
        strategy="afterInteractive"
      />
      <noscript>
        {/* A plain image is required for analytics when JavaScript is disabled. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://sa.codeyoungstown.com/noscript.gif"
          alt=""
          referrerPolicy="no-referrer-when-downgrade"
        />
      </noscript>
    </>
  );
}

export default App;
