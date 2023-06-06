import {useTranslation} from "next-i18next"

import {IChat} from "@/components/menu/Menu"
import TrashIcon from "@/components/icon/TrashIcon"


interface IProps {
  setChats: (chats: IChat[]) => void
}

function MenuClear(props: IProps) {
  const {setChats} = props
  const {t} = useTranslation('common')

  return (
    <div
      className={'flex flex-row rounded-lg mb-1 hover:bg-tuna-900 hover:cursor-pointer'}
      onClick={() => {setChats([])}}
    >
      <TrashIcon width={16} height={16} className={'ml-2 mt-3 text-wordColor-light'}/>
      <button className={'p-2 text-left text-wordColor-light'}>{t('menu.clear')}</button>
    </div>
  )
}

export default MenuClear
