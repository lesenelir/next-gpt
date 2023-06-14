import {createContext} from "react"

export interface IChat {
  id: number
  uuid: string
  itemName: string
  modifyDate: Date
}

interface IMyContext {
  theme: string
  setTheme: (theme: string) => void
  chats: IChat[]
  setChats: (chats: IChat[]) => void
}

// export const MyContext = createContext({
//   theme: 'light',
//   setTheme: (theme: string) => {},
//   chats: [],
//   setChats: (chats: IChat[]) => {}
// } as IMyContext)

export const MyContext = createContext<IMyContext>({
  theme: 'light',
  setTheme: (theme: string) => {},
  chats: [] as IChat[],
  setChats: (chats: IChat[]) => {}
})
