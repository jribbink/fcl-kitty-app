import Layout from 'components/Layout'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import KittyGrid from '../components/KittyGrid'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Kitty Shop</title>
        <meta name="description" content="FCL Demo App" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Layout>
        <KittyGrid></KittyGrid>
      </Layout>
    </>
  )
}

export default Home
