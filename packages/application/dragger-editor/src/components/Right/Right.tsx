import React, { useContext } from 'react'
import SchemaStore from '../../utils/SchemaStore'
// import ControlledAccordions from './component/ControlledAccordions/ControlledAccordions'
// import IconButtons from './component/IconButtons/IconButtons'
// import { TextField } from '@mui/material'
// import Button from '@mui/material/Button'
import './Right.css'
import ProfileForm from '@cdl-pkg/profile-form'
import {selectedNode, getSchema, dispatch} from './mock'
const schema = getSchema('1')



export default function Right() {
  // const { components, dispatch } = useContext(Context)

  // TODO: 使用 SchemaStore.find() 获取真实的schema，入参为远程组件的 name
  // StoreSchema.find() 返回的是完整的 JsonScehma，需要自行取出其中的 properties 字段
  // 例如: 
  // const schema = SchemaStore.find('123214124213')
  // if(!schema || !schema.properties) {
  //   return <div>无数据</div>
  // }
  // const { properties } =  schema

  // for debugging:
  SchemaStore.print();
  return (
    <div className='right'>
      {/* @ts-ignore */}
      <ProfileForm tag="myCom" selectedNode={selectedNode} schema={schema} dispatch={dispatch} />
    </div>
  )
}