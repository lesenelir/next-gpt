import {useState} from "react"
import Divide from "@/components/utils/Divide"
import ThemeMenu from "@/components/menu/ThemeMenu"
import GlobalMenu from "@/components/menu/GlobalMenu"
import XIcon from "@/components/icon/XIcon"
import SunIcon from "@/components/icon/SunIcon";
import GlobeIcon from "@/components/icon/GlobeIcon";

interface IProps {
  setShowModalSettings: (showModalSettings: boolean) => void
}

function Settings(props: IProps) {
  const {setShowModalSettings} = props
  const [showTheme, setShowTheme] = useState<boolean>(true)
  const [showGlobal, setShowGlobal] = useState<boolean>(false)

  const handlerTheme = () => {
    setShowTheme(true)
    setShowGlobal(false)
  }

  const handlerGlobal = () => {
    setShowTheme(false)
    setShowGlobal(true)
  }

  return (
    <div className={'w-full h-full p-4 flex flex-col rounded-lg bg-menuColors-950 ' +
      'max-sm: w-full max-sm:h-full'}
    >
      <div className={'flex flex-row justify-between'}>
        <p className={'text-wordColor-light mb-2'}>Settings</p>
        <XIcon
          width={22}
          height={22}
          className={'mb-1 text-wordColor-light hover:cursor-pointer'}
          onClick={() => setShowModalSettings(false)}
        />
      </div>
      <Divide/>

      <div className={'flex flex-row mt-4'}>
        {/* Two-column Layout */}
        <div className={'w-1/3 flex flex-col mr-2'}>
          {/* Theme */}
          <div className={'flex p-2 mb-2 rounded-lg hover:cursor-pointer hover:bg-tuna-900'} onClick={handlerTheme}>
            <SunIcon width={16} height={16} className={'mr-2 mt-1 text-wordColor-light'} />
            <p className={'text-wordColor-light'}>Theme</p>
          </div>
          {/* International */}
          <div className={'flex p-2 mb-2 rounded-lg hover:cursor-pointer hover:bg-tuna-900'} onClick={handlerGlobal}>
            <GlobeIcon width={16} height={16} className={'mr-2 mt-1 text-wordColor-light'}/>
            <p className={'text-wordColor-light'}>Global</p>
          </div>
        </div>

        <div className={'flex-1'}>
          {showTheme && !showGlobal && (
            <>
              <div className={'text-white p-2 flex flex-col justify-between'}>
                <p className={'mb-4 text-wordColor-light'}>Theme</p>
                <ThemeMenu/>
              </div>
            </>
          )}

          {!showTheme && showGlobal && (
            <>
              <div className={'text-white p-2 flex flex-col justify-between'}>
                <p className={'mb-4 text-wordColor-light'}>Global</p>
                <GlobalMenu/>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default Settings
