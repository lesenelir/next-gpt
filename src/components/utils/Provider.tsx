import {ReactNode, useState} from "react"

import {IChat, IChatMessage, MyContext} from "@/libs/myContext"

interface IProps {
  children: ReactNode
}

function Provider(props: IProps) {
  const {children} = props
  const [theme, setTheme] = useState<string>('light')
  const [chats, setChats] = useState<IChat[]>([])
  const [chatMessage, setChatMessage] = useState<IChatMessage[]>([])

  return (
    <>
      <MyContext.Provider value={{theme, setTheme, chats, setChats, chatMessage, setChatMessage}}>
        {children}
      </MyContext.Provider>
    </>
  )
}

export default Provider
