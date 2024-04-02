import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Main from '../components/Main';
import { projects } from '../utils/requests';
import Script from 'next/script';
import { useState, useEffect } from 'react'


export default function Home({ projectsList }) {
  const [isClient, setIsClient] = useState(false)
 
  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <div className="overflow-x-hidden">
      <Head>
        <title>Xhunt3r&rsquo;s Portfolio</title>
        <meta name="description" content="Vikas Gupta ( Software Developer | Security Researcher)" />
        <link rel="icon" href="/favicon.ico" />
        {/* Include the Google Analytics script directly in the <Head> */}
        <Script
          strategy="lazyOnload"
          src={`https://www.googletagmanager.com/gtag/js?id=G-3BD9GZRQ6C`}
        />
        <Script strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-3BD9GZRQ6C', {
              page_path: window.location.pathname,
            });
          `}
        </Script>
      </Head>

      <Header />
      <Main projectsList={projectsList} />
      <Footer />
    </div>
  );
}

export const getStaticProps = async () => {
  return {
    props: {
      projectsList: projects,
    },
  };
};
