import {createContext, Dispatch} from "react"

export interface IChat {
  id: number
  userId: number
  itemName: string
  itemUUID: string
  modifyDate: Date
  ChatMessage: IChatMessage[]
}

export interface IChatMessage {
  id: number
  chatId: number
  chatUUID: string
  messageContent: string
  isUser: boolean
}

// interface IMyContext {
//   theme: string
//   setTheme: Dispatch<SetStateAction<string>>
//   chats: IChat[]
//   setChats: Dispatch<SetStateAction<IChat[]>>
//   chatMessage: IChatMessage[]
//   setChatMessage: Dispatch<SetStateAction<IChatMessage[]>>
// }

export interface IState {
  theme: string
  chats: IChat[]
  chatMessage: IChatMessage[]
}

export type Action =
  | { type: 'SET_THEME', payload: string }
  | { type: 'SET_CHATS', payload: IChat[] }
  | { type: 'SET_CHAT_MESSAGE', payload: IChatMessage[] }

interface IMyContext {
  state: IState
  dispatch: Dispatch<Action>
}

export const MyContext = createContext<IMyContext>({} as IMyContext)
