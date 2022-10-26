import Footer from '../components/Footer'
import Header from '../components/Header'
import '../styles/globals.css'

import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";
import 'bootstrap/dist/css/bootstrap.min.css';

config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above


function MyApp({ Component, pageProps }) {

  return <>
    <Header />
    <Component {...pageProps} />
    <Footer/>
  </>
}

export default MyApp
