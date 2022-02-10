import React, { useContext, useEffect, useState } from 'react'
import SchemaStore from '../../utils/SchemaStore'
// import ControlledAccordions from './component/ControlledAccordions/ControlledAccordions'
// import IconButtons from './component/IconButtons/IconButtons'
// import { TextField } from '@mui/material'
// import Button from '@mui/material/Button'
import './Right.css'
import ProfileForm from '@cdl-pkg/profile-form'
// import { getSchema, dispatch } from './mock'
import { Context } from '../../store'

export default function Right() {
  // @ts-ignore
  const { components, selectedNode, dispatch } = useContext(Context)
  const [schema, setSchema] = useState({})

  useEffect(() => {
    // @ts-ignore
    if (!components[selectedNode]?.name || !components[selectedNode]) {
      return
    }
    console.log('first', selectedNode)
    // @ts-ignore
    setSchema(SchemaStore.find(components[selectedNode].name))
  }, [selectedNode])
  // TODO: 使用 SchemaStore.find() 获取真实的schema，入参为远程组件的 name
  // StoreSchema.find() 返回的是完整的 JsonScehma，需要自行取出其中的 properties 字段
  // 例如:
  // const schema = SchemaStore.find('123214124213')
  // if(!schema || !schema.properties) {
  //   return <div>无数据</div>
  // }
  // const { properties } =  schema
  // @ts-ignore
  // const schema = SchemaStore.find(components[selectedNode].name)
  if (schema && schema.properties && selectedNode && components[selectedNode]) {
    return (
      <div className='right'>
        <ProfileForm
          /* @ts-ignore */
          tag={selectedNode}
          /* @ts-ignore */
          selectedNode={{
            // @ts-ignore
            ...components[selectedNode],
            // @ts-ignore
            width: components[selectedNode].style.width,
            // @ts-ignore
            height: components[selectedNode].style.height
          }}
          Ikey={selectedNode}
          /* @ts-ignore */
          schema={schema.properties}
          dispatch={dispatch}
        />
      </div>
    )
  }

  return <div>未选中节点</div>
}
