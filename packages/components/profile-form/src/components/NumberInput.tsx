import React, { ChangeEvent, FC, useState } from 'react'
import './commom.css'
import TextField from '@mui/material/TextField'
import InputAdornment from '@mui/material/InputAdornment'
export interface Props {
  prop: string
  value: number
  minimum?: number
  maximum?: number
}

const App: FC<Props> = ({ prop, value, minimum, maximum }: Props) => {
  const [values, setValues] = useState<Props>({
    prop,
    value,
    minimum,
    maximum
  })
  const handleChange =
    (prop: keyof Props) => (event: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = Number(event.target.value)
      console.log()
      !Number.isNaN(newValue) &&
        setValues({ ...values, [prop]: event.target.value })
    }
  return (
    <div>
      <div className='title'>{prop}</div>
      <div className='item'>
        <TextField
          fullWidth
          size='small'
          label='value'
          variant='standard'
          InputProps={{
            endAdornment: <InputAdornment position='end'>px</InputAdornment>
          }}
          value={values.value}
          onChange={handleChange('value')}
        />
      </div>
      <div className='item'>
        <TextField
          fullWidth
          size='small'
          label='minimum'
          variant='standard'
          InputProps={{
            endAdornment: <InputAdornment position='end'>px</InputAdornment>
          }}
          value={values.minimum}
          onChange={handleChange('minimum')}
        />
      </div>
      <div className='item'>
        <TextField
          fullWidth
          size='small'
          label='maximum'
          variant='standard'
          InputProps={{
            endAdornment: <InputAdornment position='end'>px</InputAdornment>
          }}
          value={values.maximum}
          onChange={handleChange('maximum')}
        />
      </div>
    </div>
  )
}
export default App
