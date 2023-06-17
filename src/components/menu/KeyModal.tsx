import {ChangeEvent, Dispatch, SetStateAction, useContext, useState} from "react"
import {useTranslation} from "next-i18next"

import {MyContext} from "@/libs/myContext"
import {underScope2Camel} from "@/libs/underScope2Camel"
import Divide from "@/components/utils/Divide"
import XIcon from "@/components/icon/XIcon"

interface IProps {
  setShowModalKey: Dispatch<SetStateAction<boolean>>
}

function KeyModal(props: IProps) {
  const {setShowModalKey} = props
  const [inputValue, setInputValue] = useState<string>('')
  const {t} = useTranslation('common')
  const {setChats} = useContext(MyContext)

  const handlerSaveKey = async () => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        api_key: inputValue
      })
    }

    // localStorage.setItem('open_api_key', inputValue)

    try {
      const response = await fetch('/api/key', options)
      const data = await response.json()
      const chatsFromBackend = data?.data[0]?.ChatItems
      setShowModalKey(false)
      setChats(underScope2Camel(chatsFromBackend))
      localStorage.setItem('open_api_key', data?.data[0]?.api_key) // Save data open_api_key to localStorage
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <>
      <div className={'w-full h-full p-4 flex flex-col rounded-lg bg-menuColors-950'}>
        <div className={'flex flex-row justify-between'}>
          <p className={'text-wordColor-light mb-2'}>{t('menu.modal.apiKey')}</p>
          <XIcon
            width={22}
            height={22}
            className={'mb-1 text-wordColor-light hover:cursor-pointer'}
            onClick={() => setShowModalKey(false)}
          />
        </div>
        <Divide/>

        <div className={'flex flex-col mt-2 text-wordColor-light'}>
          <p>{t('menu.modal.keyContent')}:</p>
          <div className={'flex flex-row justify-between mt-2'}>
            <input
              type="text"
              value={inputValue}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value)}
              className={'w-3/4 text-wordColor-light border border-gray-500 mt-2 p-2 rounded-lg bg-menuColors-900'}
            />
            <button
              className={'w-1/5 h-3/4 mt-2 rounded-lg bg-emerald-800 hover:bg-emerald-700'}
              onClick={handlerSaveKey}
            >
              {t('menu.modal.save')}
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default KeyModal
