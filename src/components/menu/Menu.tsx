import React, {ChangeEvent, useContext, useState} from "react"
import {useTranslation} from "next-i18next"

import {IChat, IChatMessage, MyContext} from "@/libs/myContext"
import Divide from "@/components/utils/Divide"
import ChatBox from "@/components/menu/ChatBox"
import MenuClear from "@/components/menu/MenuClear"
import MenuKey from "@/components/menu/MenuKey"
import MenuSettings from "@/components/menu/MenuSettings"
import ColumnIcon from "@/components/icon/ColumnIcon"
import MenuLogout from "@/components/menu/MenuLogout"
import XIcon from "@/components/icon/XIcon"

interface IProps {
  isMenuOpen: boolean
  setIsMenuOpen: (isMenuOpen: boolean) => void
}

function Menu(props: IProps) {
  const {isMenuOpen, setIsMenuOpen} = props
  const [search, setSearch] = useState<string>('')
  const [isSearch, setIsSearch] = useState<boolean>(false)
  const {t} = useTranslation('common')
  const {theme, chats, setChats} = useContext(MyContext)

  const handlerAddChat = () => {
    setChats((prevState: IChat[]) => [{
      id: Math.random(),
      userId: Math.random(),
      itemName: 'New Chat',
      itemUUID: String(Math.random()),
      modifyDate: new Date(),
      ChatMessage: [] as IChatMessage[]
    }, ...prevState])
  }

  if (!isMenuOpen) {
    return (
      <div
        className={'max-sm:hidden h-10 p-2 border border-gray-300 m-2 rounded-lg cursor-pointer ' +
          `${theme === 'dark' ? 'text-wordColor-light hover:bg-menuColors-900' : 'text-wordColor-dark hover:bg-menuColors-50'}`}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <ColumnIcon width={20} height={20}/>
      </div>
    )
  }

  return (
    <div className={`h-screen flex flex-col justify-between bg-menuColors-950 p-2 w-64
          max-sm:fixed max-sm:top-0 max-sm:left-0 max-sm:z-10 max-sm:w-3/4 max-sm:flex max-sm:flex-col
          ${isMenuOpen ? 'sm:flex flex-col max-sm:block' : 'sm:hidden max-sm:hidden'}`}
    >
      {/* Top */}
      <div className={'mb-4'}>
        <div className={'flex flex-row'}>
          <button
            className={`p-2 border border-gray-500 rounded-lg mb-2 w-4/5 text-left text-wordColor-light`}
            onClick={handlerAddChat}
          >{t('menu.newChat')}
          </button>
          <div
            className={'p-2 border border-gray-500 ml-2 mb-2 rounded-lg text-wordColor-light cursor-pointer hover:bg-menuColors-900'}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <ColumnIcon width={20} height={20}/>
          </div>
        </div>
        <div className={'relative rounded-lg border border-gray-500'}>
          <input
            type="text"
            value={search}
            placeholder={t('menu.searchPlaceholder')!}
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
              <XIcon width={20} height={20} className={'text-wordColor-light'}/>
            </button>
          )}
        </div>
      </div>

      {/* Content */}
      <Divide/>
      {/*<div className={'flex-grow overflow-auto scrollable'}>*/}
      {/*  {isSearch ? (*/}
      {/*    chats.filter((chat: IChat) => chat.message.includes(search)).map((chat: IChat) => (*/}
      {/*      <ChatBox key={chat.id} message={chat.message} id={chat.id} chatsArr={chats} setChatsArr={setChats}/>*/}
      {/*    ))*/}
      {/*  ) : (*/}
      {/*    chats.map((chat: IChat) => (*/}
      {/*      <ChatBox key={chat.id} message={chat.message} id={chat.id} chatsArr={chats} setChatsArr={setChats}/>*/}
      {/*    ))*/}
      {/*  )}*/}
      {/*</div>*/}
      <div className={'flex-grow overflow-auto scrollable'}>
        {isSearch ? (
          chats.filter((chat: IChat) => chat.itemName.includes(search)).map((chat: IChat) => (
            // 此处的key 可以后续该为item的uuid值
            <ChatBox key={chat.id} message={chat.itemName} id={chat.id}/>
          ))
        ) : (
          chats.map((chat: IChat) => (
            <ChatBox key={chat.id} message={chat.itemName} id={chat.id}/>
          ))
        )}
      </div>


      {/* Button */}
      <Divide/>
      <div className={'mt-4'}>
        <MenuClear setChats={setChats}/>
        <MenuKey/>
        <MenuSettings/>
        <MenuLogout/>
      </div>
    </div>
  )
}

export default Menu
