import {ReactNode, useReducer} from "react"

import {Action, IState, MyContext} from "@/libs/myContext"

interface IProps {
  children: ReactNode
}

// return a next state (new state) based on the action type
const reducer = (state: IState, action: Action): IState => {
  switch (action.type) {
    case 'SET_THEME':
      return {
        ...state,
        theme: action.payload
      }
    case 'SET_CHATS':
      return {
        ...state,
        chats: action.payload
      }
    case 'SET_CHAT_MESSAGE':
      return {
        ...state,
        chatMessage: action.payload
      }
    default:
      throw new Error('unknown action type')
  }
}

const initialState: IState = {
  theme: 'light',
  chats: [],
  chatMessage: []
}

function Provider(props: IProps) {
  const {children} = props
  const [state, dispatch] = useReducer(reducer, initialState)
  // const [theme, setTheme] = useState<string>('light')
  // const [chats, setChats] = useState<IChat[]>([])
  // const [chatMessage, setChatMessage] = useState<IChatMessage[]>([])

  return (
    <>
      {/*<MyContext.Provider value={{theme, setTheme, chats, setChats, chatMessage, setChatMessage}}>*/}
      {/*  {children}*/}
      {/*</MyContext.Provider>*/}
      <MyContext.Provider value={{state, dispatch}}>
        {children}
      </MyContext.Provider>
    </>
  )
}

export default Provider
