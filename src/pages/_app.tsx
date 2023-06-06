import type {AppProps} from 'next/app'
import {appWithTranslation} from "next-i18next"

import ThemeProvider from "@/components/utils/ThemeProvider"

import '@/styles/globals.css'

function App({Component, pageProps}: AppProps) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default appWithTranslation(App)
