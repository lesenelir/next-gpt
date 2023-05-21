import {createContext, Dispatch, ReactNode, SetStateAction, useState} from "react"

interface IProps {
  children: ReactNode
}

interface IThemeContext {
  theme: string
  setTheme: Dispatch<SetStateAction<string>>
}

export const ThemeContext = createContext({theme: 'light', setTheme: () => {}} as IThemeContext)

function ThemeProvider(props: IProps) {
  const {children} = props
  const [theme, setTheme] = useState<string>('light')

  // useEffect(() => {
  //   localStorage.setItem('theme', theme)
  // }, [theme])

  return (
    <>
      <ThemeContext.Provider value={{theme, setTheme}}>
        {children}
      </ThemeContext.Provider>
    </>
  )
}

export default ThemeProvider
