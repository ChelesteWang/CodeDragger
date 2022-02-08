// @ts-nocheck
import { FC } from 'react'

import selectedNode from './interface/selectedNode'
import NumberInput from './components/NumberInput'
import SingleChoice from './components/SingleChoice'
const getSchema = (id: string) => {
  return {
    "shape": {
      "type": "string",
      "oneof": ["rect" , "radius" , "round" , "circle"],
      "interaction": "single_choice"
    },
    "width": {
      "type": "number",
      "minimum": 0,
      "maximum": 2000,
      "interaction": "input"
    },
    "height": {
      "type": "number",
      "minimum": 0,
      "maximum": 2000,
      "interaction": "input"
    }
  }
}
let selected = {
  shape: 'rect',
  width: 20,
  height: 20,
  images: []
}
const App: FC<selectedNode> = ({ tag, properties }: selectedNode) => {
  console.log('getSchema', getSchema('1'));
  const schema = getSchema('1')
  return (
    <div className='profile-form'>
      <div>Component：{tag}</div>
      <h3>Base Config</h3>
      { 
        Object.entries(schema).map(([key, value]) => {
        if (value.type === 'number' && value.interaction === 'input') {
          // @ts-ignore
          return <NumberInput key={key} prop={key} value={selected[key]} {...value} />
        } else if (value.type === 'string' && value.interaction === 'single_choice') {
          // @ts-ignore
          return <SingleChoice key={key} prop={key} value={selected[key]} {...value}/>
        }
        return <div>prop: {key}</div>
      })}
    </div>
  )
}

export default App
