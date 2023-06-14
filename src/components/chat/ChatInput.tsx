import {ChangeEvent, Dispatch, FormEvent, KeyboardEvent, SetStateAction, useContext, useState} from "react"
import {useTranslation} from "next-i18next"

import {MyContext} from "@/libs/myContext"
import {IMessage} from "@/components/chat/Chat"
import SendIcon from "@/components/icon/SendIcon"

interface IProps {
  setAnswer: Dispatch<SetStateAction<IMessage | null>>
  setQuestion: Dispatch<SetStateAction<IMessage | null>>
  setIsChatting: Dispatch<SetStateAction<boolean>>
  setPreviousChat: Dispatch<SetStateAction<IMessage[]>>
}

function ChatInput(props: IProps) {
  const {setAnswer, setQuestion, setIsChatting, setPreviousChat} = props
  const [inputValue, setInputValue] = useState<string>('')
  const {theme} = useContext(MyContext)
  const {t} = useTranslation('common')

  const handlerRequest = async (e: FormEvent<HTMLFormElement> | KeyboardEvent<HTMLTextAreaElement>) => {
    e.preventDefault()
    setQuestion({role: 'user', content: inputValue})
    setInputValue('')
    setIsChatting(true)
    setAnswer({role: 'assistant', content: 'Loading...'})
    const options = {
      method: 'POST',
      body: JSON.stringify({
        message: inputValue
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    }

    try {
      const response = await fetch('/api/chat', options)
      const data = await response.json()
      setPreviousChat((previousChat: IMessage[]) => previousChat.slice(0, previousChat.length - 1)) // delete loading message
      setAnswer(data?.data?.choices[0].message)
    } catch (e) {
      console.log('client error ', e)
    }
  }

  return (
    <div className={`relative w-3/5 border p-1 rounded-lg drop-shadow-lg
        ${theme === 'dark' ? 'bg-tuna-chatInput border-gray-700' : 'bg-white'}`}
    >
      <form onSubmit={handlerRequest}>
        <textarea
          name="message"
          id="chat-input"
          placeholder={t('chat.InputPlaceholder')!}
          cols={100}
          rows={1}
          value={inputValue}
          onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setInputValue(e.target.value)}
          onKeyDown={(e: KeyboardEvent<HTMLTextAreaElement>) => {
            if (e.key === 'Enter' && !e.shiftKey && inputValue) {
              e.preventDefault()
              handlerRequest(e).then(() => console.log())
            }
          }}
          className={`p-1 w-full rounded-lg mt-1 resize-none focus-visible:outline-none 
          ${theme === 'dark' ? 'bg-tuna-chatInput text-wordColor-light' : 'bg-white text-black'}`}
        />
        <button
          type='submit'
          className={`absolute right-1 top-1 mr-2 mt-2 opacity-30 ${theme === 'dark' ? 'text-white' : 'text-black'}`}
        >
          <SendIcon width={20} height={20} className={`mt-0.5 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`} />
        </button>
      </form>
    </div>
  )
}

export default ChatInput
