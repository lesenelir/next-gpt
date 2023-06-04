import '@/styles/globals.css'
import type {AppProps} from 'next/app'
import ThemeProvider from "@/components/utils/ThemeProvider"
import Layout from "@/pages/Layout"

export default function App({Component, pageProps}: AppProps) {
  return (
    <ThemeProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}
