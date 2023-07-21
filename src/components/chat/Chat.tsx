import {useContext, useEffect, useState} from "react"
import {useTranslation} from "next-i18next"
import {useRouter} from "next/router"

import 'highlight.js/styles/color-brewer.css'
import hljs from "highlight.js"

import {IChatMessage, MyContext} from "@/libs/myContext"
import {chatItemCamel, chatMessageCamel} from "@/libs/underScope2Camel"
import ChatInput from "@/components/chat/ChatInput"
import UserIcon from "@/components/icon/UserIcon"
import BotIcon from "@/components/icon/BotIcon"
import Footer from "@/components/utils/Footer"

function Chat() {
  const [isChatting, setIsChatting] = useState<boolean>(false)
  const {state, dispatch} = useContext(MyContext) // const {theme, setChats, chatMessage, setChatMessage} = useContext(MyContext)
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
          // setChatMessage(chatMessageCamel(dataFromBackend))
          dispatch({type: 'SET_CHAT_MESSAGE', payload: chatMessageCamel(dataFromBackend)})
        } else {
          setIsChatting(false)
        }
      } catch (e) {
        console.error(e)
      }
    }

    if (router.query.id) {
      init().then(r => r)
    }
  }, [router.query.id, dispatch])

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
      // setChats(chatItemCamel(menuData?.data))
      dispatch({type: 'SET_CHATS', payload: chatItemCamel(menuData?.data)})
    }
    init().then(r => r)
  }, [dispatch])

  // highlight pre code
  useEffect(() => {
    document.querySelectorAll("pre code").forEach(block => {
      hljs.highlightBlock(block as HTMLElement)
    })
  }, [state.chatMessage])

  // Render List
  const chatList = state.chatMessage.map((chat: IChatMessage) => {
    if (chat.isUser) {
      return (
        <div
          key={chat.id}
          className={
            'w-full p-8 flex flex-row ' +
            `${state.theme === 'dark' ? 'bg-botBackGround-userDark text-chatMessage-dark' : 'text-chatMessage-light'}`
          }
        >
          <div className={'ml-4'}>
            <UserIcon/>
          </div>
          <article className={'mr-4'}>
            <p className={'ml-4'}>{chat.messageContent}</p>
          </article>
        </div>
      )
    } else { // isAssistant
      return (
        <div
          key={chat.id}
          className={
            'w-full p-8 flex flex-row ' +
            `${state.theme === 'dark' ? 'text-chatMessage-dark' : 'bg-botBackGround-light text-chatMessage-light'}`
          }
        >
          <div className={'ml-4'}>
            <BotIcon/>
          </div>
          <article className={'mr-4 overflow-auto'}>
            <p
              className={`ml-4 ${state.theme === 'light' ? 'markdown': 'markdown-dark'}`}
              dangerouslySetInnerHTML={{__html: chat.messageContent}}
            />
          </article>
        </div>
      )
    }
  })

  return (
    <div
      className={
        'h-screen flex-1 flex flex-col justify-center items-center ' +
        `${state.theme === 'dark' ? 'bg-tuna-900' : 'bg-white'}`
      }
    >
      {/* Content Area */}
      {!isChatting ? (
        <div
          className={
            'w-full flex-1 flex flex-col justify-center items-center mb-4 p-4 ' +
            `${state.theme === 'dark' ? 'text-wordColor-light' : 'text-wordColor-dark'}`
          }
        >
          <h2 className={'text-2xl p-2'}>{t('chat.title')}</h2>
          <p className={'max-sm: text-center p-1'}>{t('chat.content1')}</p>
          <p className={'max-sm: text-center'}>{t('chat.content2')}</p>
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
