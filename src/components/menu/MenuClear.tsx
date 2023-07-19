import {useContext} from "react"
import {useTranslation} from "next-i18next"
import {useRouter} from "next/router"

import {MyContext} from "@/libs/myContext"
import {underScope2Camel} from "@/libs/underScope2Camel"
import TrashIcon from "@/components/icon/TrashIcon"

function MenuClear() {
  const {dispatch} = useContext(MyContext) // const {setChats} = useContext(MyContext)
  const {t} = useTranslation('common')
  const router = useRouter()

  const handlerClear = async () => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        api_key: localStorage.getItem('open_api_key')
      })
    }

    try {
      const response = await fetch('/api/clearChatItem', options)
      const data = await response.json()
      const chatsFromBackend = data?.data[0]?.ChatItems
      // setChats(underScope2Camel(chatsFromBackend))
      dispatch({type: 'SET_CHATS', payload: underScope2Camel(chatsFromBackend)})
      await router.push(`/chat`)
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <div
      className={'flex flex-row rounded-lg mb-1 hover:bg-tuna-900 hover:cursor-pointer'}
      onClick={handlerClear}
    >
      <TrashIcon width={16} height={16} className={'ml-2 mt-3 text-wordColor-light'}/>
      <button className={'p-2 text-left text-wordColor-light'}>{t('menu.clear')}</button>
    </div>
  )
}

export default MenuClear
