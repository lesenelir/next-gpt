import type {AppProps} from 'next/app'
import {appWithTranslation} from "next-i18next"

import Provider from "@/components/utils/Provider"

import '@/styles/globals.css'

function App({Component, pageProps}: AppProps) {
  return (
    <Provider>
      <Component {...pageProps} />
    </Provider>
  )
}

export default appWithTranslation(App)
