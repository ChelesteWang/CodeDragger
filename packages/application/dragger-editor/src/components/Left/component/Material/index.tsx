import { FC, ReactElement } from 'react'
import './index.css'

export interface MatrialProps {
  desc?: string
  children: ReactElement
}

export default function Matrial({
  desc = '组件',
  children
}: MatrialProps): ReactElement {
  return (
    <div className='material-wrapper'>
      {children}
      <p>{desc}</p>
    </div>
  )
}
