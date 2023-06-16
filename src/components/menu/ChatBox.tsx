import {ChangeEvent, useContext, useState, MouseEvent, Dispatch, SetStateAction} from "react"
import {useRouter} from "next/router"

import {MyContext} from "@/libs/myContext"
import {underScope2Camel} from "@/libs/underScope2Camel"
import MessageIcon from "@/components/icon/MessageIcon"
import EditIcon from "@/components/icon/EditIcon"
import TrashIcon from "@/components/icon/TrashIcon"
import CheckIcon from "@/components/icon/CheckIcon"
import XIcon from "@/components/icon/XIcon"

interface IProps {
  id: number
  message: string
  itemUUID: string
  selectChatId: number | null
  setSelectChatId: Dispatch<SetStateAction<number | null>>
}

function ChatBox(props: IProps) {
  const {id, message, itemUUID, selectChatId, setSelectChatId} = props
  const [inputValue, setInputValue] = useState<string>(message)
  const [isDelete, setIsDelete] = useState<boolean>(false)
  const [isEdit, setIsEdit] = useState<boolean>(false)
  const {setChats} = useContext(MyContext)
  const router = useRouter()

  const handlerCheckClick = async (e: MouseEvent<HTMLElement, globalThis.MouseEvent>) => {
    e.stopPropagation()
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        api_key: localStorage.getItem('open_api_key'),
        item_uuid: itemUUID,
        item_name: inputValue
      })
    }

    try {
      const response = await fetch('/api/updateChatItem', options)
      const data = await response.json()
      const chatsFromBackend = data?.data[0]?.ChatItems
      setChats(underScope2Camel(chatsFromBackend))
      await router.push(`/chat/${itemUUID}`)
    } catch (e) {
      console.error(e)
    }

    setIsEdit(false)
  }

  const handlerDeleteItem = async (e: MouseEvent<HTMLElement, globalThis.MouseEvent>) => {
    e.stopPropagation()
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        api_key: localStorage.getItem('open_api_key'),
        item_uuid: itemUUID
      })
    }

    try {
      const response = await fetch('/api/deleteChatItem', options)
      const data = await response.json()
      const chatsFromBackend = data?.data[0]?.ChatItems
      setChats(underScope2Camel(chatsFromBackend))
      await router.push('/chat')
    } catch (e) {
      console.error(e)
    }

    setIsDelete(false)
  }

  const handlerPageRouter = async () => {
    await router.push(`/chat/${itemUUID}`)
    setSelectChatId(id)
  }

  return (
    <div
      className={
        'flex flex-row justify-between ' +
        'relative mt-2 p-2 text-wordColor-light rounded-lg ' +
        `${id === selectChatId ? 'bg-tuna-900' : 'bg-menuColors-950'} ` +
        'hover:bg-tuna-900 hover:opacity-90 hover:cursor-pointer '
      }
      onClick={handlerPageRouter}
    >
      {/* content */}
      <div className={'flex'}>
        <MessageIcon width={16} height={16} className={'mr-2 mt-1 text-wordColor-light'}/>
        <div className={'mr-2'}>
          {isEdit ? (
            <input
              type="text"
              value={inputValue}
              className={'w-10/12 border p bg-transparent'}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value)}
            />
          ) : (
            <p>{message.slice(0, 18)}</p>
          )}
        </div>
      </div>

      {/* normal icon */}
      {!isEdit && !isDelete && (
        <div className={'flex absolute right-0 top-0 mt-3'}>
          <EditIcon
            width={16}
            height={16}
            className={'text-wordColor-light mr-2'}
            onClick={(e: MouseEvent<HTMLElement, globalThis.MouseEvent>) => {
              e.stopPropagation()
              setIsEdit(true)
            }}
          />
          <TrashIcon
            width={16}
            height={16}
            className={'mr-1 text-wordColor-light'}
            onClick={(e: MouseEvent<HTMLElement, globalThis.MouseEvent>) => {
              e.stopPropagation()
              setIsDelete(true)
            }}
          />
        </div>
      )}

      {/* editing icon */}
      {isEdit && !isDelete && (
        <div className={'flex absolute right-0 top-0 mt-3'}>
          <CheckIcon
            width={16}
            height={16}
            className={'mr-2 text-wordColor-light'}
            onClick={handlerCheckClick}
          />
          <XIcon
            width={16}
            height={16}
            className={'mr-2 text-wordColor-light'}
            onClick={(e: MouseEvent<HTMLElement, globalThis.MouseEvent>) => {
              e.stopPropagation()
              setInputValue(message)
              setIsEdit(false)
            }}
          />
        </div>
      )}

      {/* deleting icon */}
      {!isEdit && isDelete && (
        <div className={'flex absolute right-0 top-0 mt-3'}>
          <CheckIcon
            width={16}
            height={16}
            className={'mr-2 text-wordColor-light'}
            onClick={handlerDeleteItem}
          />
          <XIcon
            width={16}
            height={16}
            className={'mr-2 text-wordColor-light'}
            onClick={(e: MouseEvent<HTMLElement, globalThis.MouseEvent>) => {
              e.stopPropagation()
              setIsDelete(false)
            }}
          />
        </div>
      )}

    </div>
  )
}

export default ChatBox
