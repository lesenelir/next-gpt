import {useState} from "react"
import Divide from "@/components/utils/Divide"
import ChatBox from "@/components/menu/ChatBox"
import MenuSettings from "@/components/menu/MenuSettings"


export interface IChat {
  id: number
}

interface IMenuSettings {
  imgSrc: string
  imgAlt: string
  imgWidth: number
  imgHeight: number
  buttonContent: string
}

const menuSettingsArr: IMenuSettings[] = [
  {imgSrc: '/trash.svg', imgAlt: 'trash icon', imgWidth: 16, imgHeight: 16, buttonContent: 'Clear Conversations'},
  {imgSrc: '/key.svg', imgAlt: 'key icon', imgWidth: 16, imgHeight: 16, buttonContent: 'OpenAI key'},
  {imgSrc: '/settings.svg', imgAlt: 'settings icon', imgWidth: 16, imgHeight: 16, buttonContent: 'Settings'}
]


function Menu() {
  const [chats, setChats] = useState<IChat[]>([])

  const handlerAddChat = () => {
    setChats(prevState => [...prevState, {id: Math.random()}])
  }

  return (
    <div className={'flex flex-col justify-between w-64 bg-menuColors-800 p-2'}>
      {/*Top*/}
      <div className={'mb-4'}>
        <button
          className={'p-2 border rounded-lg mb-2 w-full text-left text-white'}
          onClick={handlerAddChat}
        >+ New chat</button>
        <input
          type="text"
          placeholder={'Search...'}
          className={'border border-gray-300 p-2 rounded-lg w-full bg-menuColors-700 focus: text-white'}
        />
      </div>

      {/*Content*/}
      <Divide/>
      <div className={'flex-grow overflow-auto scrollable'}>
        {chats.map(chat => (
          <ChatBox key={chat.id} id={chat.id} chatsArr={chats} setChatsArr={setChats}/>
        ))}
      </div>

      {/*Button*/}
      <Divide/>
      <div className={'mt-4'}>
        {menuSettingsArr.map(menu => (
          <MenuSettings
            key={menu.imgSrc}
            imgSrc={menu.imgSrc}
            imgAlt={menu.imgAlt}
            imgWidth={menu.imgWidth}
            imgHeight={menu.imgHeight}
            buttonContent={menu.buttonContent}
          />
        ))}
      </div>
    </div>
  )
}

export default Menu
