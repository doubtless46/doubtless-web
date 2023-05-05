import "../styles/styles.global.css";
import type { AppProps } from "next/app";
import Head from "next/head";

function App({ Component, pageProps }: AppProps) {
  return (
    <main>
        <Component {...pageProps} />
    </main>
  );
}
export default App;
