import Image from "next/image";

interface IProps {
  imgSrc: string
  imgAlt: string
  imgWidth: number
  imgHeight: number
  buttonContent: string
}

function MenuSettings(props: IProps) {
  const {imgSrc, imgAlt, imgWidth, imgHeight, buttonContent} = props

  return (
    <div className={'flex flex-row rounded-lg mb-1 hover:bg-menuColors-700'}>
      <Image
        src={imgSrc}
        alt={imgAlt}
        width={imgWidth}
        height={imgHeight}
        className={'ml-2'}
      />
      <button className={'p-2 text-left text-white'}>
        {buttonContent}
      </button>
    </div>
  )
}

export default MenuSettings
