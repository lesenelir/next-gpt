import {createContext, SetStateAction, Dispatch} from "react"

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

interface IMyContext {
  theme: string
  setTheme: Dispatch<SetStateAction<string>>
  chats: IChat[]
  setChats: Dispatch<SetStateAction<IChat[]>>
  chatMessage: IChatMessage[]
  setChatMessage: Dispatch<SetStateAction<IChatMessage[]>>
}

export const MyContext = createContext<IMyContext>({} as IMyContext)
