import {ChangeEvent, useContext, useState} from "react"

import {IChat, MyContext} from "@/libs/myContext"
import MessageIcon from "@/components/icon/MessageIcon"
import EditIcon from "@/components/icon/EditIcon"
import TrashIcon from "@/components/icon/TrashIcon"
import CheckIcon from "@/components/icon/CheckIcon"
import XIcon from "@/components/icon/XIcon"

interface IProps {
  id: number
  message: string
}

function ChatBox(props: IProps) {
  const {id, message} = props
  const [inputValue, setInputValue] = useState<string>(message)
  const [isDelete, setIsDelete] = useState<boolean>(false)
  const [isEdit, setIsEdit] = useState<boolean>(false)
  const {chats, setChats} = useContext(MyContext)

  const handlerCheckClick = () => {
    setIsEdit(!isEdit)
    const updatedChats: IChat[] = chats.map((chat: IChat) => {
      if (chat.id === id) {
        return {...chat, itemName: inputValue}
      }
      return chat
    })
    setChats(updatedChats)
  }

  return (
    <div className={'flex flex-row justify-between relative mt-2 p-2 text-wordColor-light rounded-lg hover:bg-tuna-900 hover:cursor-pointer'}>
      {/* content */}
      <div className={'flex'}>
        <MessageIcon width={16} height={16} className={'mr-2 mt-1 text-wordColor-light'}/>
        <div className={'mr-2'}>
          {isEdit ? (
            <input
              type="text"
              value={inputValue}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value)}
              className={'w-10/12 border p bg-transparent'}
            />
          ) : (
            <p>{message.slice(0, 18)}</p>
          )}
        </div>
      </div>

      {/* normal icon */}
      {!isEdit && !isDelete && (
        <div className={'flex absolute right-0 top-0 mt-3'}>
          <EditIcon width={16} height={16} className={'text-wordColor-light mr-2'} onClick={() => setIsEdit(true)}/>
          <TrashIcon
            width={16}
            height={16}
            className={'mr-1 text-wordColor-light'}
            onClick={() => setIsDelete(true)}
          />
        </div>
      )}

      {/* editing icon */}
      {isEdit && !isDelete && (
        <div className={'flex absolute right-0 top-0 mt-3'}>
          <CheckIcon width={16} height={16} className={'mr-2 text-wordColor-light'} onClick={handlerCheckClick} />
          <XIcon
            width={16}
            height={16}
            className={'mr-2 text-wordColor-light'}
            onClick={() => {
              setInputValue(message)
              setIsEdit(false)
            }}
          />
        </div>
      )}

      {/* deleting icon */}
      {!isEdit && isDelete && (
        <div className={'flex absolute right-0 top-0 mt-3'}>
          <CheckIcon width={16} height={16} className={'mr-2 text-wordColor-light'} onClick={() => console.log(11)} />
          <XIcon
            width={16}
            height={16}
            className={'mr-2 text-wordColor-light'}
            onClick={() => {
              setIsDelete(false)
            }}
          />
        </div>
      )}

    </div>
  )
}

export default ChatBox
