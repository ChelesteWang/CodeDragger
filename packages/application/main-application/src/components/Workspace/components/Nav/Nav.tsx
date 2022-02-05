import React from 'react'
import Button from '@mui/material/Button'
import './Nav.css'

export default class Hello extends React.Component {
  render(): React.ReactNode {
    return (
      <div className='nav-bar'>
        <div className='logo'>CodeDragger LowCode</div>
        <ul className='button-list'>
          <li>
            <Button variant='contained'>预览</Button>
          </li>
          <li>
            <Button variant='contained'>btn2</Button>
          </li>
          <li>
            <Button variant='contained'>btn3</Button>
          </li>
        </ul>
      </div>
    )
  }
}
