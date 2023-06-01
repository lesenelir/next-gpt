import {useState} from "react"
import ModalOverlay from "@/components/menu/ModalOverlay"
import KeyModal from "@/components/menu/KeyModal"
import KeyIcon from "@/components/icon/KeyIcon"

function MenuKey() {
  const [showModalKey, setShowModalKey] = useState<boolean>(false)

  return (
    <>
      {showModalKey && (
        <ModalOverlay onClose={() => setShowModalKey(false)}>
          <KeyModal setShowModalKey={setShowModalKey}/>
        </ModalOverlay>
      )}

      <div
        className={'flex flex-row rounded-lg mb-1 hover:bg-tuna-900 hover:cursor-pointer'}
        onClick={() => setShowModalKey(true)}
      >
        <KeyIcon width={16} height={16} className={'ml-2 mt-3 text-wordColor-light'}/>
        <button className={'p-2 text-left text-wordColor-light'}>OpenAI key</button>
      </div>
    </>
  )
}

export default MenuKey
