import "../styles/styles.global.css";
import "./Vaibhav/vaibhav.css"
import type { AppProps } from "next/app";
import Navbar from 'pages/components/Navbar'
import Footer from "components/Footer";


function App({ Component, pageProps }: AppProps) {
  return (
    <main>
      <Navbar/>
        <Component {...pageProps} />
        <Footer/>
    </main>
  );
}
export default App;
