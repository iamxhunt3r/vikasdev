import Head from 'next/head'
import Header from '../components/Header'
import Main from '../components/Main'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Xhunt3r&rsquo;s Portfolio</title>
        <meta name="description" content="Vikas Gupta ( Software Developer | Security Researcher)" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Main />

    </div>
  )
}
