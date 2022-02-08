import React from 'react'
import Button from '@mui/material/Button'
import './Nav.css'

interface Iprops {
  name: string
  editTime: string
}

export default class Hello extends React.Component<Iprops> {
  render(): React.ReactNode {
    const { name, editTime } = this.props
    return (
      <div className='nav-bar'>
        <div className='logo'>CodeDragger LowCode</div>
        <ul className='button-list'>
          <li>
            <Button variant='outlined' color='inherit'>
              预览
            </Button>
          </li>
          <li>
            <Button variant='outlined' color='inherit'>
              创建时间：{editTime.slice(0, 10)}
            </Button>
          </li>
          <li>
            <Button variant='outlined' color='inherit'>
              项目名称：{name}
            </Button>
          </li>
        </ul>
      </div>
    )
  }
}
