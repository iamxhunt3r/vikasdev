import Head from 'next/head'
import Header from '../components/Header'
import Main from '../components/Main'
import { projects } from '../utils/requests'


export default function Home({projectsList}) {
  return (
    <div className="overflow-x-hidden">
      <Head>
        <title>Xhunt3r&rsquo;s Portfolio</title>
        <meta name="description" content="Vikas Gupta ( Software Developer | Security Researcher)" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Main projectsList={projectsList}/>

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