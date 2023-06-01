import {ChangeEvent, useState} from "react"
import Divide from "@/components/utils/Divide"
import XIcon from "@/components/icon/XIcon";

interface IProps {
  setShowModalKey: (showModalKey: boolean) => void
}

function KeyModal(props: IProps) {
  const {setShowModalKey} = props
  const [inputValue, setInputValue] = useState<string>('')

  return (
    <>
      <div className={'w-full h-full p-4 flex flex-col rounded-lg bg-menuColors-950'}>
        <div className={'flex flex-row justify-between'}>
          <p className={'text-wordColor-light mb-2'}>API Key</p>
          <XIcon
            width={22}
            height={22}
            className={'mb-1 text-wordColor-light hover:cursor-pointer'}
            onClick={() => setShowModalKey(false)}
          />
        </div>
        <Divide/>

        <div className={'flex flex-col mt-2 text-wordColor-light'}>
          <p>OpenAI API Key:</p>
          <div className={'flex flex-row justify-between mt-2'}>
            <input
              type="text"
              value={inputValue}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value)}
              className={'w-3/4 text-wordColor-light border border-gray-400 p-2 rounded-lg bg-menuColors-900 mt-2'}
            />
            <button className={'w-1/5 h-3/4 mt-2 rounded-lg bg-emerald-800 hover:bg-emerald-700'}>Save</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default KeyModal
