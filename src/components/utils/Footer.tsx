import {useContext} from "react"
import {useTranslation} from "next-i18next"

import {ThemeContext} from "@/components/utils/ThemeProvider"
import GithubIcon from "@/components/icon/GithubIcon"

function Footer() {
  const {theme} = useContext(ThemeContext)
  const {t} = useTranslation('common')

  return (
    <>
      <footer className={`flex flex-row m-2 ${theme === 'dark' ? 'text-wordColor-light' : 'text-wordColor-dark'}`}>
        <p className={'mr-2'}>{t('footer')} © Lesenelir Zhou</p>
        <a href={'https://github.com/lesenelir'} target={'_blank'} className={'m-auto'}>
          <GithubIcon/>
        </a>
      </footer>
    </>
  )
}

export default Footer
