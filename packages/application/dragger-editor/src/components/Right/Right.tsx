import React, { useContext } from 'react'
// import ControlledAccordions from './component/ControlledAccordions/ControlledAccordions'
// import IconButtons from './component/IconButtons/IconButtons'
// import { TextField } from '@mui/material'
// import Button from '@mui/material/Button'
import './Right.css'
import ProfileForm from '@cdl-pkg/profile-form'
import {selectedNode, getSchema, dispatch} from './mock'
const schema = getSchema('1')
export default class Right extends React.Component {
  render(): React.ReactNode {
    return (
      <div className='right'>
        {/* @ts-ignore */}
        <ProfileForm tag="myCom" selectedNode={selectedNode} schema={schema} dispatch={dispatch}/>
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
