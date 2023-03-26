import Layout from '@/components/layout'
import '@/styles/globals.css'
import Head from 'next/head'
import Script from 'next/script'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Middlman - Outsourcing made easy</title>
        <meta name="description" content="Streamline your business with Middlman's outsourcing arbitrage." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Script src="https://apps.elfsight.com/p/platform.js" defer />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
