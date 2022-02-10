import React, { ChangeEvent, FC, useState } from 'react'
import './commom.css'
import TextField from '@mui/material/TextField'
import InputAdornment from '@mui/material/InputAdornment'
export interface Props {
  prop: string
  type: string
  value: string
  minimum: number
  maximum: number
}

const App: FC<Props> = ({ prop, value, type, minimum, maximum }: Props) => {
  const [values, setValues] = useState<string>(value)
  let [isError, setIsError] = useState<boolean>(false)
  let [errorMsg, setErrorMsg] = useState<string>('')
//   const checkValue = (newValue: number) => {
//     if (minimum !== undefined && newValue < minimum) {
//       setIsError(true)
//       setErrorMsg(`必须大于${minimum}`)
//       return false
//     }
//     if (maximum !== undefined && newValue > maximum) {
//       setIsError(true)
//       setErrorMsg(`必须小于${maximum}`)
//       return false
//     }
//     setIsError(false)
//     setErrorMsg('')
//     return true
//   }
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value
    // if (!checkValue(newValue)) return
    if (newValue) {
      setValues(newValue)
      // TODO: 调用dispatch方法
      console.log(`update:【调用dispatch】${prop}设置为${newValue}`);
      
    }
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
          // InputProps={{
          //   endAdornment: <InputAdornment position='end'>px</InputAdornment>,
          //   inputMode: 'numeric'
          // }}
          value={values}
          error={isError}
          helperText={errorMsg}
          onChange={handleChange}
        //   onBlur={(event: React.FocusEvent<HTMLInputElement>) => {
        //     checkValue(Number(event.target.value))
        //   }}
        />
      </div>
    </div>
  )
}
export default App
