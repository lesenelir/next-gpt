import {useContext} from "react"
import {ThemeContext} from "@/components/utils/ThemeProvider"
import SendIcon from "@/components/icon/SendIcon"

function ChatInput() {
  const {theme} = useContext(ThemeContext)

  return (
    <div className={`relative w-3/5 border p-1 mb-4 rounded-lg drop-shadow-lg
        ${theme === 'dark' ? 'bg-tuna-chatInput border-gray-700' : 'bg-white'}`}
    >
      <textarea
        name="message"
        id="chat-input"
        cols={100}
        rows={1}
        className={`p-1 w-full rounded-lg mt-1 resize-none focus-visible:outline-none 
        ${theme === 'dark' ? 'bg-tuna-chatInput text-wordColor-light' : 'bg-white text-black'}`}
        placeholder='Send a message...'
      />
      <button className={`absolute right-1 top-1 mr-2 mt-2 opacity-30 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
        <SendIcon width={20} height={20} className={`mt-0.5 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`} />
      </button>
    </div>
  )
}

export default ChatInput
