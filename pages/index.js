import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Main from '../components/Main'
import { projects } from '../utils/requests'


export default function Home({projectsList}) {
  return (
    <div className="overflow-x-hidden">
      <Head>
        <title>Xhunt3r&rsquo;s Portfolio</title>
        <meta name="description" content="Vikas Gupta ( Software Developer | Security Researcher)" />
        <link rel="icon" href="/favicon.ico" />
        <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />
      </Head>

      <Header />
      <Main projectsList={projectsList}/>
      <Footer />
    </div>
  )
}

export const getStaticProps = async () => {
  return {
    props: {
      projectsList: projects,
    },
  };
};