import {useContext, useEffect, useState} from "react"
import {useTranslation} from "next-i18next"
import {useRouter} from "next/router"

import {IChatMessage, MyContext} from "@/libs/myContext"
import {chatItemCamel, chatMessageCamel} from "@/libs/underScope2Camel"
import ChatInput from "@/components/chat/ChatInput"
import Footer from "@/components/utils/Footer"
import UserIcon from "@/components/icon/UserIcon"
import BotIcon from "@/components/icon/BotIcon"

function Chat() {
  const [isChatting, setIsChatting] = useState<boolean>(false)
  const {theme, setChats, chatMessage, setChatMessage} = useContext(MyContext)
  const {t} = useTranslation('common')
  const router = useRouter()

  // Click the specific chat box, then fetch the chat history by chat_uuid, and set the isChatting state
  useEffect(() => {
    const init = async () => {
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          chat_uuid: router.query.id
        })
      }

      try {
        // fetch all chat message history by chat_uuid
        const response = await fetch('/api/isChat', options)
        const data = await response.json()
        const dataFromBackend = data?.data
        if (Array.isArray(dataFromBackend)) {
          setIsChatting(true)
          setChatMessage(chatMessageCamel(dataFromBackend))
        } else {
          setIsChatting(false)
        }
      } catch (e) {
        console.error(e)
      }
    }

    if (router.query.id) {
      init().then(r => console.log(r))
    }
  }, [router.query.id, setChatMessage])

  useEffect(() => {
    const optionsGetChatItem = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        api_key: localStorage.getItem('open_api_key')
      })
    }

    const init = async () => {
      const menuChatsResponse = await fetch('/api/getChatItem', optionsGetChatItem)
      const menuData = await menuChatsResponse.json()
      setChats(chatItemCamel(menuData?.data))
    }
    init().then(r => console.log(r))
  }, [setChats])

  // Render List
  const chatList = chatMessage.map((chat: IChatMessage) => {
    if (chat.isUser) {
      return (
        <div
          key={chat.id}
          className={
            'w-full p-8 flex flex-row ' +
            `${theme === 'dark' ? 'bg-botBackGround-userDark text-wordColor-light' : 'text-wordColor-dark'}`
          }
        >
          <div className={'sm:ml-60'}>
            <UserIcon/>
          </div>
          <div className={'sm:mr-60'}>
            <p className={'ml-4'}>{chat.messageContent}</p>
          </div>
        </div>
      )
    } else { // isAssistant
      return (
        <div
          key={chat.id}
          className={
            'w-full p-8 flex flex-row ' +
            `${theme === 'dark' ? 'text-wordColor-light' : 'bg-botBackGround-light text-wordColor-dark'}`
          }
        >
          <div className={'sm:ml-60'}>
            <BotIcon/>
          </div>
          <div className={'sm:mr-60'}>
            <p className={'ml-4'}>{chat.messageContent}</p>
          </div>
        </div>
      )
    }
  })

  return (
    <div
      className={
        'h-screen flex-1 flex flex-col justify-center items-center ' +
        `${theme === 'dark' ? 'bg-tuna-900' : 'bg-white'}`
      }
    >

      {/* Content Area */}
      {!isChatting ? (
        <div
          className={
            'w-full flex-1 flex flex-col justify-center items-center mb-4 p-4 ' +
            `${theme === 'dark' ? 'text-wordColor-light' : 'text-wordColor-dark'}`
          }
        >
          <h2 className={'text-2xl p-2'}>{t('chat.title')}</h2>
          <p className={'max-sm: text-center p-1'}>{t('chat.content1')}</p>
          <p className={'max-sm: text-center'}>{t('chat.content2')}</p>
          <p className={'max-sm: text-center p-1 text-rose-600'}>{t('chat.content3')}</p>
        </div>
      ) : (
        <div className={'w-full overflow-auto flex-1 flex flex-col'}>
          {chatList}
        </div>
      )}

      <div className={'w-full flex flex-col justify-center items-center'}>
        <ChatInput setIsChatting={setIsChatting}/>
        <Footer/>
      </div>
    </div>
  )
}

export default Chat
