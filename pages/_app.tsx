import "../styles/globals.css";
import "@fontsource/open-sans"; // Defaults to weight 400.
// font awesome config
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false; // https://fontawesome.com/v5.15/how-to-use/on-the-web/using-with/react#nextjs

function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default App;
