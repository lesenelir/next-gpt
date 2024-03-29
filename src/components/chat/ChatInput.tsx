import {ChangeEvent, Dispatch, FormEvent, KeyboardEvent, SetStateAction, useContext, useState} from "react"
import {useTranslation} from "next-i18next"
import {useRouter} from "next/router"

import {MyContext} from "@/libs/myContext"
import {chatMessageCamel} from "@/libs/underScope2Camel"
import SendIcon from "@/components/icon/SendIcon"

interface IProps {
  setIsChatting: Dispatch<SetStateAction<boolean>>
}

function ChatInput(props: IProps) {
  const {setIsChatting} = props
  const [inputValue, setInputValue] = useState<string>('')
  const {state, dispatch} = useContext(MyContext) // const {theme, setChatMessage} = useContext(MyContext)
  const router = useRouter()
  const {t} = useTranslation('common')

  const handlerRequest = async (e: FormEvent<HTMLFormElement> | KeyboardEvent<HTMLTextAreaElement>) => {
    e.preventDefault()
    setInputValue('')
    // Add a temp message to the chat box.
    // When the backend response, the temp message will be replaced by the real message.
    // setChatMessage((prevState: IChatMessage[]) => [...prevState, {
    //   id: Math.random(),
    //   chatId: Math.random(),
    //   chatUUID: 'temp_uuid',
    //   messageContent: inputValue,
    //   isUser: true
    // }, {
    //   id: Math.random(),
    //   chatId: Math.random(),
    //   chatUUID: 'temp_uuid',
    //   messageContent: 'Loading...',
    //   isUser: false
    // }])
    dispatch({
      type: 'SET_CHAT_MESSAGE',
      payload: [
        ...state.chatMessage,
        {
          id: Math.random(),
          chatId: Math.random(),
          chatUUID: 'temp_uuid',
          messageContent: inputValue,
          isUser: true
        }, {
          id: Math.random(),
          chatId: Math.random(),
          chatUUID: 'temp_uuid',
          messageContent: 'Loading...',
          isUser: false
        }
      ]
    })

    const options = {
      method: 'POST',
      body: JSON.stringify({
        api_key: localStorage.getItem('open_api_key'),
        message: inputValue,
        chat_uuid: router.query.id
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    }

    try {
      const response = await fetch('/api/chat', options)
      const data = await response.json()
      const dataFromBackend = data?.data
      // user in /chat page have no chat_uuid, so we need to redirect to /chat/:id
      if (!router.query.id) {
        await router.push(`/chat/${dataFromBackend[0]?.chat_uuid}`)
      }
      // setChatMessage(chatMessageCamel(dataFromBackend))
      dispatch({type: 'SET_CHAT_MESSAGE', payload: chatMessageCamel(dataFromBackend)})
      setIsChatting(true)
    } catch (e) {
      console.log('client error ', e)
    }
  }

  return (
    <div
      className={
        'relative w-3/5 border p-1 rounded-lg drop-shadow-lg ' +
        `${state.theme === 'dark' ? 'bg-tuna-chatInput border-gray-700' : 'bg-white'}`
      }
    >
      <form onSubmit={handlerRequest}>
        <textarea
          name="message"
          id="chat-input"
          placeholder={t('chat.InputPlaceholder')!}
          cols={100}
          rows={1}
          value={inputValue}
          className={
            'p-1 w-full rounded-lg mt-1 resize-none focus-visible:outline-none ' +
            `${state.theme === 'dark' ? 'bg-tuna-chatInput text-wordColor-light' : 'bg-white text-black'}`
          }
          onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setInputValue(e.target.value)}
          onKeyDown={(e: KeyboardEvent<HTMLTextAreaElement>) => {
            if (e.key === 'Enter' && !e.shiftKey && inputValue) {
              e.preventDefault()
              handlerRequest(e).then(() => console.log())
            }
          }}
        />
        <button
          type='submit'
          className={
            'absolute right-1 top-1 mr-2 mt-2 opacity-30 ' +
            `${state.theme === 'dark' ? 'text-white' : 'text-black'}`
          }
        >
          <SendIcon
            width={20}
            height={20}
            className={`mt-0.5 ${state.theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}
          />
        </button>
      </form>
    </div>
  )
}

export default ChatInput
