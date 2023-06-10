import {NextRouter, useRouter} from "next/router"

function DallMainPage() {
  const router: NextRouter = useRouter()

  console.log(router)

  return (
    <div className={'h-screen flex flex-row justify-center items-center gap-6'}>
      <div>
        <p className={'text-2xl'}>404</p>
      </div>

      <div className="h-10 border-l border-gray-400"></div>

      <div>
        <p className={'mb-2'}>This project is under development...</p>
        <button
          className={'p-2 text-sm rounded-lg border border-gray-400 bg-menuColors-100 hover:opacity-80 hover:cursor-pointer'}
          onClick={() => router.back()}
        >Back
        </button>
      </div>
    </div>
  )
}

export default DallMainPage
