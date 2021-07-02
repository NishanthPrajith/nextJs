import '../styles/globals.css'
import Layout from '../comps/Layout'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
		AOS.init({
			duration: 800,
      once: false
		});
	});
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp
