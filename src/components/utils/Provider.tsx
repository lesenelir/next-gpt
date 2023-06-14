import {ReactNode, useState} from "react"

import {IChat, MyContext} from "@/libs/myContext"

interface IProps {
  children: ReactNode
}

function Provider(props: IProps) {
  const {children} = props
  const [theme, setTheme] = useState<string>('light')
  const [chats, setChats] = useState<IChat[]>([])

  // useEffect(() => {
  //   localStorage.setItem('theme', theme)
  // }, [theme])

  return (
    <>
      <MyContext.Provider value={{theme, setTheme, chats, setChats}}>
        {children}
      </MyContext.Provider>
    </>
  )
}

export default Provider
