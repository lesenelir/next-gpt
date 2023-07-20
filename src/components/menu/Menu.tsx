import React, {ChangeEvent, useContext, useState} from "react"
import {useTranslation} from "next-i18next"

import {IChat, MyContext} from "@/libs/myContext"
import {underScope2Camel} from "@/libs/underScope2Camel"
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
  const [selectChatId, setSelectChatId] = useState<number | null>(null)
  const {t} = useTranslation('common')
  const {state, dispatch} = useContext(MyContext) // const {theme, chats, setChats} = useContext(MyContext)

  const handlerAddChat = async () => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        api_key: localStorage.getItem('open_api_key')
      })
    }

    try {
      const response = await fetch('/api/addChatItem', options)
      const data = await response.json()
      const chatsFromBackend = data?.data[0]?.ChatItems
      // setChats(underScope2Camel(chatsFromBackend))
      dispatch({type: 'SET_CHATS', payload: underScope2Camel(chatsFromBackend)})
    } catch (e) {
      console.error(e)
    }
  }

  if (!isMenuOpen) {
    return (
      <div
        className={
          'max-sm:hidden h-10 p-2 border border-gray-300 m-2 rounded-lg cursor-pointer ' +
          `${state.theme === 'dark' ? 'text-wordColor-light hover:bg-menuColors-900' : 'text-wordColor-dark hover:bg-menuColors-50'}`
        }
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <ColumnIcon width={20} height={20}/>
      </div>
    )
  }

  return (
    <div
      className={
        'h-screen flex flex-col justify-between bg-menuColors-950 p-2 w-64 min-w-fit ' +
        'max-sm:fixed max-sm:top-0 max-sm:left-0 max-sm:z-10 max-sm:w-3/4 max-sm:flex max-sm:flex-col ' +
        `${isMenuOpen ? 'sm:flex flex-col max-sm:block' : 'sm:hidden max-sm:hidden'}`
      }
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
      <div className={'flex-grow overflow-auto scrollable'}>
        {isSearch ? (
          state.chats.filter((chat: IChat) => chat.itemName.includes(search)).map((chat: IChat) => (
            <ChatBox
              key={chat.itemUUID}
              message={chat.itemName}
              id={chat.id}
              itemUUID={chat.itemUUID}
              selectChatId={selectChatId}
              setSelectChatId={setSelectChatId}
            />
          ))
        ) : (
          state.chats.map((chat: IChat) => (
            <ChatBox
              key={chat.itemUUID}
              message={chat.itemName}
              id={chat.id}
              itemUUID={chat.itemUUID}
              selectChatId={selectChatId}
              setSelectChatId={setSelectChatId}
            />
          ))
        )}
      </div>

      {/* Button */}
      <Divide/>
      <div className={'mt-4'}>
        <MenuClear/>
        <MenuKey/>
        <MenuSettings/>
        <MenuLogout/>
      </div>
    </div>
  )
}

export default Menu
