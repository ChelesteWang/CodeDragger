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
      <div className='nav-bar-editor'>
        <div className='logo'>
          <img
            width='250'
            src='https://qckvp9.file.qingfuwucdn.com/file/0a96a0d609bbee22_1644330902648.png'
            alt='lowcode logo'
          />
        </div>
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
