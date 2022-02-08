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
            <Button variant='contained'>Join us</Button>
          </li>
          <li>
            <Button variant='contained'>Github link</Button>
          </li>
          <li>
            <Link href='./login' underline='none'>
              <Button variant='outlined'>立即体验</Button>
            </Link>
          </li>
        </ul>
      </div>
    )
  }
}
