import Head from 'next/head';
import Footer from '../components/Footer/Footer';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Sustainability Toolkit</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="main">
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}

export default MyApp
