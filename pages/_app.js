import Head from 'next/head';
import { useEffect, useState } from 'react';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import smoothscroll from 'smoothscroll-polyfill';
import { useRouter } from 'next/router'
import '../styles/globals.css'

if (typeof window !== 'undefined') {
  smoothscroll.polyfill();
}

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
        <meta name="description" content="An overview of practical application methods and tools that help us put sustainable principles into practice" />
        <meta name="og:site_name" content="Sustainability Toolkit" />
        <meta name="og:type" content="website" />
        <meta name="og:image" content="https://sustainability.staging.random.studio/social.png" />
        <meta name="og:image:width" content="1200" />
        <meta name="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@random_studio" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicons/apple-touch-icon.png"
        />
        <link
          rel="apple-touch-icon-precomposed"
          href="/favicons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicons/favicon-16x16.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/favicons/android-chrome-192x192.png"
        />
        <link rel="manifest" href="/favicons/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/favicons/safari-pinned-tab.svg"
          color="#0000ff"
        />
        <link rel="manifest" href="/favicons/manifest.json" />
        <link rel="shortcut icon" href="/favicons/favicon.ico" />
        <link rel="icon" href="/favicons/favicon.ico" />
        <script async defer data-domain="sustainability.random.studio" src="https://plausible.io/js/plausible.js"></script>
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
