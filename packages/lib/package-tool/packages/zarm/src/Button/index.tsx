import { Button } from 'zarm'

interface ButtonProps {
  shape: 'rect' | 'radius' | 'round' | 'circle'
  buttonText: string
  width: number
  height: number
}

export default function CdlButton({ buttonText, shape }: ButtonProps) {
  return (
    <Button shape={shape} style={{ width: '100%', height: '100%' }}>
      {buttonText}
    </Button>
  )
}
