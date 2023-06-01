import Image from "next/image"
import {ChangeEvent, useState} from "react"
import Divide from "@/components/utils/Divide"
import ChatBox from "@/components/menu/ChatBox"
import MenuClear from "@/components/menu/MenuClear"
import MenuKey from "@/components/menu/MenuKey"
import MenuSettings from "@/components/menu/MenuSettings"

export interface IChat {
  id: number
  message: string
}

interface IProps {
  isMenuOpen: boolean
}

function Menu(props: IProps) {
  const {isMenuOpen} = props
  const [chats, setChats] = useState<IChat[]>([])
  const [search, setSearch] = useState<string>('')
  const [isSearch, setIsSearch] = useState<boolean>(false)

  const handlerAddChat = () => {
    setChats((prevState: IChat[]) => [{id: Math.random(), message: 'new Chat'}, ...prevState])
  }

  return (
    <div className={`h-screen flex flex-col justify-between bg-menuColors-950 p-2 w-64
    max-sm:fixed max-sm:top-0 max-sm:left-0 max-sm:z-10 max-sm:w-3/4 max-sm:flex max-sm:flex-col
    ${isMenuOpen ? 'max-sm:block': 'max-sm:hidden'}`}>
      {/* Top */}
      <div className={'mb-4'}>
        <button
          className={`p-2 border rounded-lg mb-2 w-full text-left text-wordColor-light`}
          onClick={handlerAddChat}
        >+ New chat
        </button>
        <div className={'relative rounded-lg border'}>
          <input
            type="text"
            value={search}
            placeholder={'Search...'}
            className={'p-2 rounded-lg w-full bg-menuColors-950 focus:text-wordColor-light'}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              setSearch(e.target.value)
              setIsSearch(true)
            }}
            onBlur={() => {
              setSearch('')
              setIsSearch(false)
            }}
          />
          {isSearch && (
            <button className={'absolute right-0 top-0 mt-1 p-2 opacity-90'}>
              <Image src={'/x.svg'} alt={'x icon'} width={20} height={20}/>
            </button>
          )}
        </div>
      </div>

      {/* Content */}
      <Divide/>
      <div className={'flex-grow overflow-auto scrollable'}>
        {isSearch ? (
          chats.filter((chat: IChat) => chat.message.includes(search)).map((chat: IChat) => (
            <ChatBox key={chat.id} message={chat.message} id={chat.id} chatsArr={chats} setChatsArr={setChats}/>
          ))
        ) : (
          chats.map((chat: IChat) => (
            <ChatBox key={chat.id} message={chat.message} id={chat.id} chatsArr={chats} setChatsArr={setChats}/>
          ))
        )}
      </div>

      {/* Button */}
      <Divide/>
      <div className={'mt-4'}>
        <MenuClear setChats={setChats}/>
        <MenuKey/>
        <MenuSettings/>
      </div>
    </div>
  )
}

export default Menu
