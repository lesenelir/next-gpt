import {useTranslation} from "next-i18next"
import {useRouter} from "next/router"

function GlobalMenu() {
  const {t} = useTranslation('common')
  const router = useRouter()

  return (
    <div className={'flex justify-between'}>
      <button
        className={'w-2/5 p-2 rounded-lg text-wordColor-light bg-tuna-900 hover:bg-tuna-800'}
        onClick={() => router.push(router.route, router.asPath, {locale: 'en'})}
      >
        {t('menu.modal.english')}
      </button>
      <button
        className={'w-2/5 p-2 rounded-lg text-wordColor-light bg-tuna-900 hover:bg-tuna-800'}
        onClick={() => router.push(router.route, router.asPath, {locale: 'zh'})}
      >
        {t('menu.modal.chinese')}
      </button>
    </div>
  )
}

export default GlobalMenu
