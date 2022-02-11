import { Button } from 'zarm'
import { CSSProperties } from 'react';

interface ButtonProps {
  shape: 'rect' | 'radius' | 'round' | 'circle'
  buttonText: string
  width: number
  height: number,
  style: CSSProperties,
}

export default function CdlButton({ buttonText, shape, style }: ButtonProps) {
  return (
    <Button shape={shape} style={{ ... style, width: '100%', height: '100%' }}>
      {buttonText}
    </Button>
  )
}
