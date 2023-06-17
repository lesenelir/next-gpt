import {useContext, useEffect, useState} from "react"
import {useTranslation} from "next-i18next"

import {MyContext} from "@/libs/myContext"
import ChatInput from "@/components/chat/ChatInput"
import Footer from "@/components/utils/Footer"
import UserIcon from "@/components/icon/UserIcon"
import BotIcon from "@/components/icon/BotIcon"

export interface IMessage {
  role: string
  content: string
}

function Chat() {
  const [question, setQuestion] = useState<IMessage | null>(null)
  const [answer, setAnswer] = useState<IMessage | null>(null)
  const [isChatting, setIsChatting] = useState<boolean>(false)
  const [previousChat, setPreviousChat] = useState<IMessage[]>([])
  const {theme} = useContext(MyContext)
  const {t} = useTranslation('common')

  useEffect(() => {
    if (question) setPreviousChat(previousChat => [...previousChat, question!])
  }, [question])

  useEffect(() => {
    if (answer) setPreviousChat(previousChat => [...previousChat, answer!])
  }, [answer])

  console.log(previousChat)

  // Render List
  const chatList = previousChat.map((chat, index) => {
    if (chat.role === 'user') {
      return (
        <div
          key={index}
          className={
            'w-full p-8 flex flex-row ' +
            `${theme === 'dark' ? 'bg-botBackGround-userDark text-wordColor-light' : 'text-wordColor-dark'}`
          }
        >
          <div className={'sm:ml-60'}>
            <UserIcon/>
          </div>
          <div className={'sm:mr-60'}>
            <p className={'ml-4'}>{chat.content}</p>
          </div>
        </div>
      )
    } else if (chat.role === 'assistant') {
      return (
        <div
          key={index}
          className={
            'w-full p-8 flex flex-row ' +
            `${theme === 'dark' ? 'text-wordColor-light' : 'bg-botBackGround-light text-wordColor-dark'}`
          }
        >
          <div className={'sm:ml-60'}>
            <BotIcon/>
          </div>
          <div className={'sm:mr-60'}>
            <p className={'ml-4'}>{chat.content}</p>
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
        </div>
      ) : (
        <div className={'w-full overflow-auto flex-1 flex flex-col'}>
          {chatList}
        </div>
      )}

      <div className={'w-full flex flex-col justify-center items-center'}>
        <ChatInput
          setAnswer={setAnswer}
          setQuestion={setQuestion}
          setIsChatting={setIsChatting}
          setPreviousChat={setPreviousChat}
        />
        <Footer/>
      </div>
    </div>
  )
}

export default Chat
