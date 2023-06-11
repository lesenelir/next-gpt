import Head from "next/head"

import Home from "@/components/utils/Home"

function HomePage() {
  return (
    <>
      <Head>
        <title>Lesenelir AI</title>
        <meta name="description" content="Lesenelir OpenAI Project"/>
        <link rel="icon" href={`/favicon.ico`}/>
      </Head>

      <Home/>
    </>
  )
}

export default HomePage

