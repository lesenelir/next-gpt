interface IProps {
  width: number
  height: number

}

function ColumnIcon(props: IProps) {
  const {width, height} = props

  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill="none"
           stroke="currentColor"
           strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-columns">
        <path d="M12 3h7a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-7m0-18H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7m0-18v18"></path>
      </svg>
    </>
  )
}

export default ColumnIcon
