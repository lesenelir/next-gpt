import {ReactNode, MouseEvent} from "react"

interface IProps {
  children: ReactNode
  onClose: () => void
}

function ModalOverlay(props: IProps) {
  const {children, onClose} = props

  return (
    <div className='drop-shadow-2lg fixed z-50 inset-0 bg-black bg-opacity-60 flex items-center justify-center' onClick={onClose}>
      {/* Prevents the modal from closing when clicking on the modal itself */}
      <div className={'w-1/3 h-1/3 p-2 max-sm:w-11/12 max-sm:h-1/3 max-sm:flex max-sm:flex-col max-sm:justify-center'}
           onClick={(e: MouseEvent<HTMLDivElement>) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  )
}

export default ModalOverlay
