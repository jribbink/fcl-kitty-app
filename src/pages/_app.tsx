import type { AppProps } from 'next/app'
import Layout from 'components/Layout'
import { useEffect, useState } from 'react'
import useConfig from 'hooks/use-config'

// @ts-ignore
import * as fcl from '@onflow/fcl'

function KittyApp({ Component, pageProps }: AppProps) {
  useConfig()

  const [user, setUser] = useState({loggedIn: null})

  useEffect(() => fcl.currentUser.subscribe(setUser), [])  

  return (
    <Component {...pageProps} />
  )
}

export default KittyApp
