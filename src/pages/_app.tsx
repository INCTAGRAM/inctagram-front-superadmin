import '@/assets/styles/reset.css'
import '@/assets/styles/globals.scss'
import type { AppProps } from 'next/app'
import React, { ReactElement, ReactNode } from 'react'
import { NextPage } from 'next'
import { useLoader } from '@/hooks/useLoader'
import '@/assets/styles/nprogress.scss'
import { ApolloProvider } from '@apollo/client'
import { apolloClient } from '@/helpers/apollo-client'

export type NextPageWithLayout<P = {}> = NextPage<P> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  useLoader()

  const getLayout = Component.getLayout ?? ((page) => page)

  return <ApolloProvider client={apolloClient}>{getLayout(<Component {...pageProps} />)}</ApolloProvider>
}
