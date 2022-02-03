import React from 'react'
// import ControlledAccordions from './component/ControlledAccordions/ControlledAccordions'
// import IconButtons from './component/IconButtons/IconButtons'
// import { TextField } from '@mui/material'
// import Button from '@mui/material/Button'
import { BasicConfigForm } from './component/BasicConfigForm/BasicConfigForm'
// import { BasicOptionForm } from './component/BasicOptionForm/BasicOptionForm'
import NumberInput from './component/NumberInput/NumberInput'
import './Right.css'
interface selectedNode {
  type: string
  properties: {
    width?: {
      type: string
      minimum: number
      maximum: number
      interaction: string
    }
    height?: {
      type: string
      minimum: number
      maximum: number
      interaction: string
    }
  }
}
interface Props {
  // todo: 后续需要换成schema定义的类型
  selectedNode: selectedNode
}

export default class Right extends React.Component<Props> {
  selectedNode: selectedNode
  constructor(props: Props) {
    super(props)
    this.selectedNode = this.props.selectedNode
  }
  render(): React.ReactNode {
    return (
      <div className='right'>
        <BasicConfigForm />
        <div>
          {Object.entries(this.selectedNode.properties).map((entry) => {
            if (entry[1].type === 'number') {
              return (
                <NumberInput
                  key={entry[0]}
                  title={entry[0]}
                  property={entry[1]}
                />
              )
            }
            return <div>未知type</div>
          })}
        </div>
      </div>
      // <div className='right'>
      //   <div className='top-btn'>
      //     <Button variant='outlined'>button</Button>
      //   </div>
      //   <div className='small-icon'>
      //     <IconButtons />
      //   </div>
      //   <div className='props'>
      //     <ul className='props-list'>
      //       <li>
      //         <div>
      //           <div>Text</div>
      //           <TextField
      //             size='small'
      //             id='outlined-basic'
      //             variant='outlined'
      //           />
      //         </div>
      //       </li>
      //       <li>
      //         <div>
      //           <div>Size</div>
      //           {/* <BasicSelect /> */}
      //           <select name='' id=''></select>
      //         </div>
      //       </li>
      //       <li>
      //         <div>
      //           <div>Variant</div>
      //           {/* <BasicSelect/> */}
      //           <select name='' id=''></select>
      //         </div>
      //       </li>
      //       <li>
      //         <div>
      //           <div>Color Scheme</div>
      //           <TextField
      //             size='small'
      //             id='outlined-basic'
      //             variant='outlined'
      //           />
      //         </div>
      //       </li>
      //       <li>
      //         <div>
      //           <div>Left icon</div>
      //           <TextField
      //             size='small'
      //             id='outlined-basic'
      //             variant='outlined'
      //           />
      //         </div>
      //       </li>
      //       <li>
      //         <div>
      //           <div>Right icon</div>
      //           <TextField
      //             size='small'
      //             id='outlined-basic'
      //             variant='outlined'
      //           />
      //         </div>
      //       </li>
      //     </ul>
      //   </div>
      //   <div>
      //     <ControlledAccordions />
      //   </div>
      // </div>
    )
  }
}
