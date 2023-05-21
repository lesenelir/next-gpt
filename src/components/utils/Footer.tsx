import Image from "next/image"
import {useContext} from "react";
import {ThemeContext} from "@/components/utils/ThemeProvider"

function Footer() {
  const {theme} = useContext(ThemeContext)

  return (
    <>
      <footer className={`flex flex-row ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
        <p className={'mr-2'}>From © Lesenelir Zhou</p>
        <a href={'https://github.com/lesenelir'} target={'_blank'} className={'m-auto'}>
          <Image
            src={'/github.svg'}
            alt={'Github'}
            width={16}
            height={16}
            className={`${theme === 'dark' ? 'text-white' : 'text-black'}`}
          />
        </a>
      </footer>
    </>
  )
}

export default Footer
