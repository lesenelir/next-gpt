import {useContext} from "react"
import {useTranslation} from "next-i18next"

import {ThemeContext} from "@/components/utils/ThemeProvider"

function ThemeMenu() {
  const {setTheme} = useContext(ThemeContext)
  const {t} = useTranslation('common')

  return (
    <div className={'flex justify-between'}>
      <button
        className={'w-1/3 p-2 rounded-lg text-wordColor-light bg-tuna-900 hover:bg-tuna-800'}
        onClick={() => setTheme('dark')}
      >
        {t('menu.modal.dark')}
      </button>
      <button
        className={'w-1/3 p-2 rounded-lg text-wordColor-light bg-tuna-900 hover:bg-tuna-800'}
        onClick={() => setTheme('light')}
      >
        {t('menu.modal.light')}
      </button>
    </div>
  )
}

export default ThemeMenu
