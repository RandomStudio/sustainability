import Head from 'next/head';
import { useEffect, useState } from 'react';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import { useRouter } from 'next/router'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const [isChecked, setIsChecked] = useState(false);
  const router = useRouter();
  
  useEffect(() => {
    setIsChecked(false);
  }, [router]);

  return (
    <>
      <Head>
        <title>Sustainability Toolkit</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
			<input checked={isChecked} id="navcheckbox" onChange={({ target: { checked } }) => setIsChecked(checked)} type="checkbox" />
      <Header setNavCheckedState={setIsChecked} />
      <main className="main">
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}

export default MyApp
