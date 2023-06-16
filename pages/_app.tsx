import "../styles/styles.global.css";
import "../styles/index.global.css";
import type { AppProps } from "next/app";
import Head from "next/head";

function App({ Component, pageProps }: AppProps) {
  document.title="Doubtless"
  return (
        <Component {...pageProps} />
  );
}
export default App;
