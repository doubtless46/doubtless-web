import "../styles/styles.global.css";
import "../styles/index.global.css";
import "../components/ContactForm/contactform.global.css"
import type { AppProps } from "next/app";
import Head from "next/head";

function App({ Component, pageProps }: AppProps) {
  return (
        <Component {...pageProps} />
  );
}
export default App;
