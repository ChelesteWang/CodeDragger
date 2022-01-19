import React from 'react'
import { Accordion } from '@mui/material'
import ControlledAccordions from './component/ControlledAccordions/ControlledAccordions'
import IconButtons from './component/IconButtons/IconButtons'
import { TextField } from '@mui/material'
import BasicSelect from './component/BasicSelect/BasicSelect'
import Button from '@mui/material/Button'
import './Right.css'

export default class Right extends React.Component {
  render(): React.ReactNode {
    return (
      <div className='right'>
        <div className='top-btn'>
          <Button variant='outlined'>button</Button>
        </div>
        <div className='small-icon'>
          <IconButtons />
        </div>
        <div className='props'>
          <ul className='props-list'>
            <li>
              <div>
                <div>Text</div>
                <TextField
                  size='small'
                  id='outlined-basic'
                  variant='outlined'
                />
              </div>
            </li>
            <li>
              <div>
                <div>Size</div>
                {/* <BasicSelect /> */}
                <select name='' id=''></select>
              </div>
            </li>
            <li>
              <div>
                <div>Variant</div>
                {/* <BasicSelect/> */}
                <select name='' id=''></select>
              </div>
            </li>
            <li>
              <div>
                <div>Color Scheme</div>
                <TextField
                  size='small'
                  id='outlined-basic'
                  variant='outlined'
                />
              </div>
            </li>
            <li>
              <div>
                <div>Left icon</div>
                <TextField
                  size='small'
                  id='outlined-basic'
                  variant='outlined'
                />
              </div>
            </li>
            <li>
              <div>
                <div>Right icon</div>
                <TextField
                  size='small'
                  id='outlined-basic'
                  variant='outlined'
                />
              </div>
            </li>
          </ul>
        </div>
        <div>
          <ControlledAccordions />
        </div>
      </div>
    )
  }
}
