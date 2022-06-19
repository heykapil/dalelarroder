import dynamic from 'next/dynamic'
import { FC } from 'react'

const CanvasComponent = dynamic(
  () => {
    return import('@/components/Canvas/Canvas')
  },
  { ssr: true }
)

const Canvas: FC = () => {
  return <CanvasComponent />
}

export default Canvas
