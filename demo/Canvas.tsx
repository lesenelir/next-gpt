import {useEffect, useRef} from "react"

function CanvasDemo() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  // const [context, setContext] = useState<CanvasRenderingContext2D | null>(null)

  // 绘图片函数
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const draw = (ctx: CanvasRenderingContext2D, frameCount: number) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
    ctx.fillStyle = '#000000'
    ctx.beginPath()
    ctx.arc(50, 100, 20*Math.sin(frameCount*0.05)**2, 0, 2*Math.PI)
    ctx.fill()
  }

  useEffect(() => {
    const canvas: HTMLCanvasElement = canvasRef.current!
    const context: CanvasRenderingContext2D = canvas.getContext('2d')!

    let frameCount: number = 0
    let animationFrameId: number

    const render = () => {
      frameCount++
      console.log(frameCount)
      draw(context, frameCount)
      animationFrameId = window.requestAnimationFrame(render)
    }

    render()

    return () => {
      window.cancelAnimationFrame(animationFrameId)
    }
  }, [draw])

  return (
    <canvas ref={canvasRef}/>
  )
}

export default CanvasDemo
