import { FC } from 'react'
import f from './color'
import useCanvas from './useCanvas'

function resizeCanvas(canvas: HTMLCanvasElement) {
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight
}

function onMousemove(e: MouseEvent, canvas: HTMLCanvasElement, context: CanvasRenderingContext2D) {
  console.log(e)

  // Start animation
  context.globalCompositeOperation = 'source-over'
  context.clearRect(0, 0, canvas.width, canvas.height)
  context.globalCompositeOperation = 'lighter'
  context.strokeStyle = 'hsla(' + Math.round(f.update()) + ',90%,50%,0.25)'
  context.lineWidth = 1
}

const Canvas: FC = () => {
  const canvasRef = useCanvas(([c, ctx]) => {
    const canvas = c as HTMLCanvasElement
    const context = ctx as CanvasRenderingContext2D

    resizeCanvas(canvas)

    document.addEventListener('mousemove', (e) => onMousemove(e, canvas, context))
    document.addEventListener('resize', () => resizeCanvas(canvas))
  })

  return (
    <canvas ref={canvasRef} className="bg-red-100 pointer-events-none absolute inset-0">
      Canvas
    </canvas>
  )
}

export default Canvas
