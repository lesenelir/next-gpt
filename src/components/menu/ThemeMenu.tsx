import {useContext} from "react"
import {useTranslation} from "next-i18next"

import {MyContext} from "@/libs/myContext"

function ThemeMenu() {
  const {dispatch} = useContext(MyContext) // const {setTheme} = useContext(MyContext)
  const {t} = useTranslation('common')

  return (
    <div className={'flex justify-between'}>
      <button
        className={'w-1/3 p-2 rounded-lg text-wordColor-light bg-tuna-900 hover:bg-tuna-800'}
        // onClick={() => setTheme('dark')}
        onClick={() => dispatch({type: 'SET_THEME', payload: 'dark'})}
      >
        {t('menu.modal.dark')}
      </button>
      <button
        className={'w-1/3 p-2 rounded-lg text-wordColor-light bg-tuna-900 hover:bg-tuna-800'}
        // onClick={() => setTheme('light')}
        onClick={() => dispatch({type: 'SET_THEME', payload: 'light'})}
      >
        {t('menu.modal.light')}
      </button>
    </div>
  )
}

export default ThemeMenu
