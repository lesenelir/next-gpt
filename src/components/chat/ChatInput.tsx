import {ChangeEvent, FormEvent, KeyboardEvent, useContext, useState} from "react"
import {ThemeContext} from "@/components/utils/ThemeProvider"
import SendIcon from "@/components/icon/SendIcon"

function ChatInput() {
  const [answer, setAnswer] = useState<string>('')
  const [inputValue, setInputValue] = useState<string>('')
  const {theme} = useContext(ThemeContext)

  const handlerRequest = async (e: FormEvent<HTMLFormElement> | KeyboardEvent<HTMLTextAreaElement>) => {
    e.preventDefault()
    setInputValue('')
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
      setAnswer(data.data.choices[0].message)
    } catch (e) {
      console.log('client error ', e)
    }
  }

  console.log(answer)

  return (
    <div className={`relative w-3/5 border p-1 mb-4 rounded-lg drop-shadow-lg
        ${theme === 'dark' ? 'bg-tuna-chatInput border-gray-700' : 'bg-white'}`}
    >
      <form onSubmit={handlerRequest}>
        <textarea
          name="message"
          id="chat-input"
          placeholder='Send a message...'
          cols={100}
          rows={1}
          value={inputValue}
          onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setInputValue(e.target.value)}
          onKeyDown={(e: KeyboardEvent<HTMLTextAreaElement>) => {
            if (e.key === 'Enter' && !e.shiftKey) {
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
