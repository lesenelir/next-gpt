import Link from "next/link"
import React, {useEffect, useState} from "react"

import LZIcon from "@/components/icon/LZIcon"
import ArrowUpRightIcon from "@/components/icon/ArrowUpRightIcon"
import ChevronDownIcon from "@/components/icon/ChevronDownIcon"

const textList: string[] = [
  "Let's go",
  "Let's design",
  "Let's build",
  "Let's discover",
  "Let's explore",
  "Let's innovate",
  "Let's chit-chat",
  "Let's brainstorm",
]

function Home() {
  const [colorIndex, setColorIndex] = useState<number>(0)
  const [textIndex, setTextIndex] = useState<number>(0)
  const [animationStep, setAnimationStep] = useState<'text' | 'circle'>('circle')

  useEffect(() => {
    // 第一次1.5s后显示信息
    const firstTimeout = setTimeout(() => {
      setTextIndex((prevState: number) => (prevState + 1) % 7)
      setAnimationStep('text') // 显示文字
    }, 1500)


    const interval: NodeJS.Timer = setInterval(() => {
      setAnimationStep('circle') // 不显示文字，显示圆圈
      setColorIndex((prevState: number) => (prevState + 1) % 7) // 背景变色

      const timeout = setTimeout(() => {
        setTextIndex((prevState: number) => (prevState + 1) % 7)
        setAnimationStep('text')
      }, 1500)

      return () => {
        clearTimeout(timeout)
      }
    }, 3000)

    return () => {
      clearInterval(interval)
      clearTimeout(firstTimeout)
    }
  }, [])

  return (
    <>
      {/* PC sm === 大于等于640px 电脑  ; max-sm === 小于等于640px 手机 */}
      <div className={`h-screen flex flex-col justify-between items-center
          bg-canvas-b-${colorIndex} text-canvas-t-${colorIndex}`}
      >
        {/* PC Navbar */}
        {/* sm:flex max-sm:hidden => 当大于等于640px是flex，当最大的最小宽度是小于等于640px是hidden */}
        <div className={'w-full sm:flex max-sm:hidden flex-row p-6 text-lg'}>
          <LZIcon width={60} height={60} className={`-mt-4`} />
          <p className={'w-1/5 text-xl p-1 flex flex-row items-center'}>Lesenelir AI Base</p>
          <div className={'w-full flex flex-row justify-between '}>
            <ul className={'flex flex-row gap-8'}>
              <li className={'p-1 flex flex-row items-center cursor-pointer hover:underline underline-offset-4'}>
                Research
                <ChevronDownIcon width={20} height={20} className={'ml-1'}/>
              </li>
              <li className={'p-1 flex flex-row items-center cursor-pointer hover:underline underline-offset-4'}>
                Product
                <ChevronDownIcon width={20} height={20} className={'ml-1'}/>
              </li>
              <li className={'p-1 flex flex-row items-center cursor-pointer hover:underline underline-offset-4'}>
                Developers
                <ChevronDownIcon width={20} height={20} className={'ml-1'}/>
              </li>
              <li className={'p-1 flex flex-row items-center cursor-pointer hover:underline underline-offset-4'}>
                Safety
              </li>
            </ul>
            <ul className={'flex flex-row gap-8'}>
              <li className={'p-1 flex flex-row items-center hover:underline underline-offset-4 cursor-pointer'}>
                Search
              </li>
              <li className={'p-1 flex flex-row items-center hover:underline underline-offset-4 cursor-pointer'}>
                Log in <ArrowUpRightIcon width={20} height={20} className={'mt-1'}/>
              </li>
              <li className={'border p-1 flex flex-row items-center hover:bg-wordColor-dark hover:text-wordColor-light hover:cursor-pointer'}>
                Sign in <ArrowUpRightIcon width={20} height={20} className={'mt-1'}/>
              </li>
            </ul>
          </div>
        </div>

        {/* Mobile Navbar */}
        {/* Navbar */}
        <div className={'w-full sm:hidden max-sm:flex flex-row justify-between p-2 text-lg'}>
          <div className={'flex flex-row'}>
            <LZIcon width={60} height={60} className={``} />
            <p className={'mt-5'}>Lesenelir AI Base</p>
          </div>
          <p className={'mt-5 cursor-pointer'}>Menu</p>
        </div>

        {/* Content */}
        <div className={'flex-1 flex flex-col justify-center items-center'}>
          <div className={'flex flex-row'}>
            <h2 className={`text-lg p-2 ${animationStep === 'text' ? 'block' : 'hidden'}`}>
              {textList[textIndex]}
            </h2>
            <div className={`w-10 h-10 rounded-full bg-canvas-t-${colorIndex}`}></div>
          </div>
          <ul className={'list-none flex flex-row gap-2 m-6'}>
            <li
              className={
                'p-2 rounded-lg border bg-canvas-b-${colorIndex} text-canvas-t-${colorIndex} ' +
                `hover:bg-wordColor-dark hover:text-wordColor-light hover:cursor-pointer`
              }
              onClick={() => localStorage.setItem('open_api_key', 'test1')}
            >
              <Link href={'/chat'}>ChatGPT</Link>
            </li>
            <li
              className={
                'p-2 rounded-lg border bg-canvas-b-${colorIndex} text-canvas-t-${colorIndex} ' +
                `hover:bg-wordColor-dark hover:text-wordColor-light hover:cursor-pointer`
              }
            >
              <Link href={'/dall'}>DALL-E</Link>
            </li>
          </ul>
        </div>

        {/* Footer */}
        <div className={'flex flex-col self-start m-10'}>
          <p>
            <span className={'text-lg'}> Lesenelir AI Base: </span>
            <span className={'text-base'}>
              A collection of art and code works about AI, inspired by OpenAI.
            </span>
          </p>
          <p>
            This project includes: ChatGPT and DALL-E.
          </p>
          <div className={'flex flex-row'}>
            <p className={'mt-4 underline underline-offset-4 cursor-pointer hover:text-opacity-30'}>
              <a href={'https://github.com/lesenelir'} target={'_blank'} rel={'noopener noreferrer'}>
                Find the author
              </a>
            </p>
            <ArrowUpRightIcon width={24} height={24} className={'ml-1 mt-4'}/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
