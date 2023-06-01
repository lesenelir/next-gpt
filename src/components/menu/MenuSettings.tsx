import {useState} from "react"
import Settings from "@/components/menu/Settings"
import ModalOverlay from "@/components/menu/ModalOverlay"
import SettingsIcon from "@/components/icon/SettingsIcon"

function MenuSettings() {
  const [showModalSettings, setShowModalSettings] = useState<boolean>(false)

  return (
    <>
      {/* Modal */}
      {showModalSettings && (
        <ModalOverlay onClose={() => setShowModalSettings(false)}>
          <Settings setShowModalSettings={setShowModalSettings}/>
        </ModalOverlay>
      )}

      <div
        className={'flex flex-row rounded-lg mb-1 hover:bg-tuna-900 hover:cursor-pointer'}
        onClick={() => setShowModalSettings(!showModalSettings)}
      >
        <SettingsIcon width={16} height={16} className={'ml-2 mt-3 text-wordColor-light'}/>
        <button className={'p-2 text-left text-wordColor-light'}>Settings</button>
      </div>
    </>
  )
}

export default MenuSettings
