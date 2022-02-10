import React, { FC, useState } from 'react'
import Box from '@mui/material/Box'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import './commom.css'
export interface Props {
  prop: string
  type: string
  value: string
  oneof: Array<string>
}
const App: FC<Props> = ({ prop, type, value, oneof }: Props) => {
  const [val, setVal] = React.useState<string>(value)
  const handleChange = (event: SelectChangeEvent) => {
    setVal(event.target.value as string)
    // TODO: 调用dispatch方法
    console.log(`update:【调用dispatch】${prop}设置为${event.target.value}`)
  }
  return (
    <div className='single-choice'>
      <div className='title'>{prop}</div>
      <div className='item'>
        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel id='single-select-label'>value</InputLabel>
            <Select
              labelId='single-select-label'
              id='single-select'
              value={val}
              label={prop}
              onChange={handleChange}
            >
              {oneof.map((selectItem) => {
                return <MenuItem value={selectItem}>{selectItem}</MenuItem>
              })}
            </Select>
          </FormControl>
        </Box>
      </div>
    </div>
  )
}

export default App
