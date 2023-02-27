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
/* 自定义浅色主题 */
const lightThemeConfig = createTheme({
  type: 'light',
  theme: {
    colors: {
      // brand colors
      primaryLight: '$purple200',
      primaryLightHover: '$purple300',
      primaryLightActive: '$purple400',
      primaryLightContrast: '$purple600',
      primary: '#ac49ed',
      primaryBorder: '$purple500',
      primaryBorderHover: '$purple600',
      primarySolidHover: '$purple700',
      primarySolidContrast: '$white',
      primaryShadow: '$purple500',

      gradient: 'linear-gradient(112deg, $blue100 -25%, $pink500 -10%, $purple500 80%)',
      link: '#5E1DAD',
    }
  }
})
/* 自定义黑暗主题 */
const darkThemeConfig = createTheme({
  type: 'dark',
  theme: {
    colors: {
      // brand colors
      primaryLight: '$purple200',
      primaryLightHover: '$purple300',
      primaryLightActive: '$purple400',
      primaryLightContrast: '$purple600',
      primary: '#ac49ed',
      primaryBorder: '$purple500',
      primaryBorderHover: '$purple600',
      primarySolidHover: '$purple700',
      primarySolidContrast: '$white',
      primaryShadow: '$purple500',

      gradient: 'linear-gradient(112deg, $blue100 -25%, $pink500 -10%, $purple500 80%)',
      link: '#5E1DAD',
    }
  }
})

function App({ Component, pageProps }: AppProps) {
  const [mounted, setMounted] = React.useState(false)
  React.useEffect(() => setMounted(true), [])
  return (
    /* 引入nextUI theme */
    <NextThemesProvider
      defaultTheme="dark"
      attribute="class"
      value={{
        light: lightThemeConfig.className,
        dark: darkThemeConfig.className,
      }}
    >
      {/* 引入nextUI provider */}
      <NextUIProvider>
        {/* 引入wagmi */}
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
