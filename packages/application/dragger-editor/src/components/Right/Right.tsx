// @ts-nocheck
import React, { useContext } from 'react'
// import ControlledAccordions from './component/ControlledAccordions/ControlledAccordions'
// import IconButtons from './component/IconButtons/IconButtons'
// import { TextField } from '@mui/material'
// import Button from '@mui/material/Button'
import './Right.css'
import ProfileForm from '@cdl-pkg/profile-form'
import { selectedNode, getSchema, dispatch } from './mock'
const schema = getSchema('1')

export default function Right() {
  // const { components, dispatch } = useContext(Context)

  return (
    <div className='right'>
      <ProfileForm
        tag='myCom'
        selectedNode={selectedNode}
        schema={schema}
        dispatch={dispatch}
      />
    </div>
  )
}
