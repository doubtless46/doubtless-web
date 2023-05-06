import "../styles/styles.global.css";
import "./Vaibhav/vaibhav.css"
import type { AppProps } from "next/app";


function App({ Component, pageProps }: AppProps) {
  return (
    <main>
        <Component {...pageProps} />
    </main>
  );
}
export default App;
