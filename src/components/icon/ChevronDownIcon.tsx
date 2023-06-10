interface IProps {
  width: number
  height: number
  className: string
}

function ChevronDownIcon(props: IProps) {
  const {width, height, className} = props

  return (
    <div className={className}>
      <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill="none"
           stroke="currentColor"
           strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-down">
        <polyline points="6 9 12 15 18 9"/>
      </svg>
    </div>
  )
}

export default ChevronDownIcon
