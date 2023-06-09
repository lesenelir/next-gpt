import {useTranslation} from "next-i18next"
import {useRouter} from "next/router"

import LogoutIcon from "@/components/icon/LogoutIcon"

function MenuLogout() {
  const router = useRouter()
  const {t} = useTranslation('common')

  return (
    <div
      className={'flex flex-row rounded-lg mb-1 hover:bg-tuna-900 hover:cursor-pointer'}
      onClick={() => router.push('/')}
    >
      <LogoutIcon width={16} height={16} className={'ml-2 mt-3 text-wordColor-light'}/>
      <button className={'p-2 text-left text-wordColor-light'}>{t('menu.logout')}</button>
    </div>
  )
}

export default MenuLogout
