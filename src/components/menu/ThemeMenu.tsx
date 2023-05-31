import {useContext} from "react"
import {ThemeContext} from "@/components/utils/ThemeProvider"

function ThemeMenu() {
  const {setTheme} = useContext(ThemeContext)

  const handlerDarkButton = () => {
    setTheme('dark')
  }

  const handlerLightButton = () => {
    setTheme('light')
  }

  return (
    <div className={'flex justify-between'}>
      <button className={'w-1/3 p-2 rounded-lg bg-tuna-900 hover:bg-tuna-800'} onClick={handlerDarkButton}>Dark</button>
      <button className={'w-1/3 p-2 rounded-lg bg-tuna-900 hover:bg-tuna-800'} onClick={handlerLightButton}>Light</button>
    </div>
  )
}

export default ThemeMenu
