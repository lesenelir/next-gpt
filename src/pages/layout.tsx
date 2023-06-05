import Head from "next/head"
import Menu from "@/components/menu/Menu"
import Divide from "@/components/utils/Divide"
import ShrinkIcon from "@/components/icon/ShrinkIcon"
import XIcon from "@/components/icon/XIcon"
import {ReactNode, useContext, useState} from "react"
import {ThemeContext} from "@/components/utils/ThemeProvider"

interface IProps {
  children: ReactNode
}

function Layout(props: IProps) {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(true)
  const {theme} = useContext(ThemeContext)
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
      <div className={'h-screen max-sm:flex sm:hidden flex-col'}>
        <div className={`${theme === 'dark' ? 'bg-tuna-900' : 'bg-white'}`}>
          <Menu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}/>
          <div
            className={`${isMenuOpen ? 'block' : 'hidden'} fixed top-0 left-3/4 ${theme === 'dark' ? 'text-white' : 'text-black'}`}
            onClick={toggleMenu}
          >
            <XIcon width={24} height={24}/>
          </div>
          <button className={`${theme === 'dark' ? 'text-white' : 'text-black'}`} onClick={toggleMenu}><ShrinkIcon/></button>
        </div>
        <Divide/>
        {children}
      </div>

      {/* PC */}
      <div className={`h-screen max-sm:hidden sm:flex flex-row ${theme === 'dark' ? 'bg-menuColors-chatGround' : 'bg-white'}`}>
        <Menu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}/>
        {children}
      </div>
    </>
  )
}

export default Layout
