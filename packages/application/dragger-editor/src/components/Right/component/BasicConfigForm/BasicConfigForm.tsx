import * as React from 'react'
import TextField from '@mui/material/TextField'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'

export class BasicConfigForm extends React.Component {
  render() {
    return (
      <div>
        <h3>Basic</h3>
        <TextField id='standard-basic' label='title' variant='standard' />
        <TextField id='standard-basic' label='default' variant='standard' />
        <TextField id='standard-basic' label='width' variant='standard' />
        <FormControl>
          <FormLabel id='demo-radio-buttons-group-label'>disabled</FormLabel>
          <RadioGroup
            row
            aria-labelledby='demo-radio-buttons-group-label'
            defaultValue='false'
            name='radio-buttons-group'
          >
            <FormControlLabel value='true' control={<Radio />} label='true' />
            <FormControlLabel value='false' control={<Radio />} label='false' />
          </RadioGroup>
        </FormControl>
        <FormControl>
          <FormLabel id='demo-radio-buttons-group-label'>required</FormLabel>
          <RadioGroup
            row
            aria-labelledby='demo-radio-buttons-group-label'
            defaultValue='false'
            name='radio-buttons-group'
          >
            <FormControlLabel value='true' control={<Radio />} label='true' />
            <FormControlLabel value='false' control={<Radio />} label='false' />
          </RadioGroup>
        </FormControl>
      </div>
    )
  }
}
