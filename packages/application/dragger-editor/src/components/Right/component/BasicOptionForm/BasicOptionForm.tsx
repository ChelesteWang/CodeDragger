import * as React from 'react'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import Switch from '@mui/material/Switch'
import TextField from '@mui/material/TextField'

export class BasicOptionForm extends React.Component {
  render() {
    return (
      <div className='basic-options'>
        <h3>Options</h3>
        <TextField id='standard-basic' label='placeholder' variant='standard' />
        <FormGroup>
          <FormControlLabel control={<Switch />} label='Clear ALL' />
          <FormControlLabel control={<Switch />} label='isPassword' />
        </FormGroup>
      </div>
    )
  }
}
