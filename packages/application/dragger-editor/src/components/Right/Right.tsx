import React, { useContext } from 'react'
// import ControlledAccordions from './component/ControlledAccordions/ControlledAccordions'
// import IconButtons from './component/IconButtons/IconButtons'
// import { TextField } from '@mui/material'
// import Button from '@mui/material/Button'
import './Right.css'
import ProfileForm from '@cdl-pkg/profile-form'
import { Context } from '../../store'
const selectedNode = {
  tag: 'MyCom',
  properties: {
    width: {
      type: 'number',
      minimum: 1,
      value: 50,
      maximum: 2000,
      interaction: 'slide'
    },
    height: {
      type: 'number',
      minimum: 1,
      value: 50,
      maximum: 2000,
      interaction: 'slide'
    }
  }
}
export default function Right() {
  const { components, dispatch } = useContext(Context)
  return (
    <div className='right'>
      <ProfileForm {...selectedNode} />
    </div>
  )
}
