import { FC } from 'react'
import TextField from '@mui/material/TextField'
interface IPorps {
  title: string
  property: {
    type: string
    minimum: number
    maximum: number
    interaction: string
  }
}
const NumberInput: FC<IPorps> = (props) => {
  console.log(props)

  return (
    <div className='number-input'>
      <h4>{props.title}</h4>
      <TextField id='standard-basic' label='minimum' variant='standard' />
      <TextField id='standard-basic' label='maximum' variant='standard' />
    </div>
  )
}
export default NumberInput
