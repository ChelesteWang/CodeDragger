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
  dispatch:any
  Ikey:string
}
const App: FC<Props> = ({ prop, type, value, oneof,Ikey,dispatch }: Props) => {
  const [val, setVal] = React.useState<string>(value)
  const path = [prop]
  console.log(path, 'path')
  const handleChange = (event: SelectChangeEvent) => {
    const newValue = event.target.value
    setVal(newValue  as string)
    // TODO: 调用dispatch方法
    dispatch({
      type: 'editNode',
      payload: { key: Ikey, value: newValue, path: path }
    })
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
              {oneof.map((selectItem, i) => {
                return (
                  <MenuItem value={selectItem} key={i}>
                    {selectItem}
                  </MenuItem>
                )
              })}
            </Select>
          </FormControl>
        </Box>
      </div>
    </div>
  )
}

export default App
