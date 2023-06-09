import Head from "next/head"
import Link from "next/link"

function Home() {
  return (
    <>
      <Head>
        <title>Lesenelir AI</title>
        <meta name="description" content="Lesenelir OpenAI Project"/>
        <link rel="icon" href={`/favicon.ico`}/>
      </Head>

      <div className={'h-screen flex flex-col justify-center items-center'}>
        <h2 className={'text-lg p-2'}>Welcome to the Lesenelir AI Experiment Base</h2>
        <ul className={'list-none flex flex-row gap-2'}>
          <li className={'p-2 rounded-lg bg-menuColors-100 hover:opacity-80 hover:cursor-pointer'}><Link href={'/chat'}>ChatGPT</Link></li>
          <li className={'p-2 rounded-lg bg-menuColors-100 hover:opacity-80 hover:cursor-pointer'}><Link href={'/dall'}>DallGPT</Link></li>
        </ul>
      </div>
    </>
  )
}

export default Home
