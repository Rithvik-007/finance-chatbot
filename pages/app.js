// pages/_app.js
import 'bootstrap/dist/css/bootstrap.min.css';
//import '../styles/globals.css';  // your custom CSS if any

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
