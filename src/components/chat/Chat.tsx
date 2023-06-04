import {useContext} from "react"
import ChatInput from "@/components/chat/ChatInput"
import Footer from "@/components/utils/Footer"
import {ThemeContext} from "@/components/utils/ThemeProvider"

function Chat() {
  const {theme} = useContext(ThemeContext)

  return (
    <div className={`flex-1 flex flex-col justify-center items-center p-2 
          ${theme === 'dark' ? 'bg-tuna-900' : 'bg-white'}`}
    >
      {/* Content Area */}
      <div className={`w-full flex-1 flex flex-col justify-center items-center mb-2 p-2 
            ${theme === 'dark' ? 'text-wordColor-light' : 'text-wordColor-dark'}`}
      >
        <h2 className={'text-2xl m-2'}>Welcome to Next Chatbot !</h2>
        <p>It&apos;s an open-source project primarily aimed at learning.</p>
        <p>Next Chatbot allows you to plug in your GPT API key to provide services. </p>
      </div>

      <div className={'w-full flex flex-col justify-center items-center'}>
        <ChatInput/>
        <Footer/>
      </div>
    </div>
  )
}

export default Chat
