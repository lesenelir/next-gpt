import {useContext} from "react"
import ChatInput from "@/components/chat/ChatInput"
import Footer from "@/components/utils/Footer"
import {ThemeContext} from "@/components/utils/ThemeProvider"

function Chat() {
  const {theme} = useContext(ThemeContext)

  return (
    <div className={`flex-1 flex flex-col justify-between items-center p-2
    ${theme === 'dark' ? 'bg-menuColors-700' : 'bg-theme-bg-light'}`
    }>
      {/* Content Area */}
      <div className={`flex flex-col items-center justify-center p-2 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
        <h2 className={'text-2xl m-2'}>Welcome to Next Chatbot !</h2>
        <p>It&apos;s an open-source project primarily aimed at learning.</p>
        <p>Next Chatbot allows you to plug in your GPT API key to provide services. </p>
      </div>

      <div className={'grow p-2'}></div>

      <ChatInput/>
      <Footer/>
    </div>
  )
}

export default Chat
