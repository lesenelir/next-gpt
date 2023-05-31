import {useContext} from "react"
import {ThemeContext} from "@/components/utils/ThemeProvider"
import SendIcon from "@/components/icon/SendIcon"

function ChatInput() {
  const {theme} = useContext(ThemeContext)

  return (
    <div className={'relative w-2/3 border border-gray-300 p-1 mb-1 rounded-lg'}>
      <textarea
        name="message"
        id="chat-input"
        cols={100}
        rows={1}
        className={`p-1 w-full rounded-lg mt-1 resize-none focus-visible:outline-none 
        ${theme === 'dark' ? 'bg-tuna-900 text-white' : 'bg-white text-black'}`}
        placeholder='Send a message...'
      />
      <button className={`absolute right-1 top-1 mr-2 mt-2 opacity-30 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
        <SendIcon/>
      </button>
    </div>
  )
}

export default ChatInput
