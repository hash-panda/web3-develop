import '@rainbow-me/rainbowkit/styles.css'
import '../styles/globals.css'
import { RainbowKitProvider, darkTheme } from '@rainbow-me/rainbowkit'
import { createTheme, NextUIProvider } from '@nextui-org/react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import type { AppProps } from 'next/app'
import NextHead from 'next/head'
import * as React from 'react'
import { WagmiConfig } from 'wagmi'
import { Layout } from '../components/layout/layout'
import { chains, client } from '../wagmi'

const lightThemeConfig = createTheme({
  type: 'light',
  theme: {
    colors: {}
  }
})

const darkThemeConfig = createTheme({
  type: 'dark',
  theme: {
    colors: {}
  }
})

function App({ Component, pageProps }: AppProps) {
  const [mounted, setMounted] = React.useState(false)
  React.useEffect(() => setMounted(true), [])
  return (
    <NextThemesProvider
      defaultTheme="dark"
      attribute="class"
      value={{
        light: lightThemeConfig.className,
        dark: darkThemeConfig.className,
      }}
    >
      <NextUIProvider>
        <WagmiConfig client={client}>
          <RainbowKitProvider theme={
            darkTheme({
              accentColor: '#A653F6',
              accentColorForeground: 'white',
            })
          } chains={chains}>
            <NextHead>
              <title>Web3 Develop</title>
            </NextHead>
            <Layout>
              {mounted && <Component {...pageProps} />}
            </Layout>
          </RainbowKitProvider>
        </WagmiConfig>
      </NextUIProvider>
    </NextThemesProvider>
  )
}

export default App
