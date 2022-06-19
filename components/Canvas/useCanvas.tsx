import { useEffect, useRef } from 'react'

const useCanvas = (callback) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    callback([canvas, ctx])
  }, [callback])

  return canvasRef
}

export default useCanvas
