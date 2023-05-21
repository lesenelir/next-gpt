import {useContext} from "react"
import {ThemeContext} from "@/components/utils/ThemeProvider"
import GithubIcon from "@/components/icon/GithubIcon"

function Footer() {
  const {theme} = useContext(ThemeContext)

  return (
    <>
      <footer className={`flex flex-row ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
        <p className={'mr-2'}>From © Lesenelir Zhou</p>
        <a href={'https://github.com/lesenelir'} target={'_blank'} className={'m-auto'}>
          <GithubIcon/>
        </a>
      </footer>
    </>
  )
}

export default Footer
