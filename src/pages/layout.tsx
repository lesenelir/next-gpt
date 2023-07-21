import {ReactNode, useContext, useState} from "react"
import Head from "next/head"

import {MyContext} from "@/libs/myContext"
import Menu from "@/components/menu/Menu"
import Divide from "@/components/utils/Divide"
import ShrinkIcon from "@/components/icon/ShrinkIcon"
import XIcon from "@/components/icon/XIcon"

interface IProps {
  children: ReactNode
}

function Layout(props: IProps) {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(true)
  const {state} = useContext(MyContext) // const {theme} = useContext(MyContext)
  const {children} = props

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <>
      <Head>
        <title>Next GPT</title>
        <meta name="description" content="A chatbot built using Next.js framework"/>
        <link rel="icon" href={`/favicon.ico`}/>
      </Head>

      {/* Mobile */}
      <div className={'min-h-screen max-sm:flex sm:hidden flex-col'}>
        <div className={`fixed top-0 w-full z-20 ${state.theme === 'dark' ? 'bg-tuna-900' : 'bg-white'}`}>
          <Menu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}/>
          <div
            className={`${isMenuOpen ? 'block' : 'hidden'} fixed top-0 left-3/4 ${state.theme === 'dark' ? 'text-white' : 'text-black'}`}
            onClick={toggleMenu}
          >
            <XIcon width={24} height={24}/>
          </div>
          <button className={`${state.theme === 'dark' ? 'text-white' : 'text-black'}`} onClick={toggleMenu}><ShrinkIcon/></button>
          <Divide/>
        </div>
        <div className={'mt-8'}>
          {children}
        </div>
      </div>

      {/* PC */}
      <div className={`h-screen max-sm:hidden sm:flex flex-row ${state.theme === 'dark' ? 'bg-menuColors-chatGround' : 'bg-white'}`}>
        <Menu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}/>
        {children}
      </div>
    </>
  )
}

export default Layout
