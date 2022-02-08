import React from 'react'
import Button from '@mui/material/Button'
import Link from '@mui/material/Link'
import './Nav.css'

export default class Hello extends React.Component {
  render(): React.ReactNode {
    return (
      <div className='nav-bar'>
        <div className='logo'>CodeDragger LowCode</div>
        <ul className='button-list'>
          <li>
            <Button variant='outlined' color='inherit'>
              加入我们
            </Button>
          </li>
          <li>
            <Button variant='outlined' color='inherit'>
              项目地址
            </Button>
          </li>
          <li>
            <Link href='./login' underline='none' color='inherit'>
              <Button variant='outlined' color='inherit'>
                立即体验
              </Button>
            </Link>
          </li>
        </ul>
      </div>
    )
  }
}
