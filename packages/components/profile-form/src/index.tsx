import { FC } from 'react'

import selectedNode from './interface/selectedNode'
import NumberInput from './components/NumberInput'
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
  shape: '1',
  width: 20,
  height: 20
}
const App: FC<selectedNode> = ({ tag, properties }: selectedNode) => {
  console.log('getSchema', getSchema('1'));
  const schema = getSchema('1')
  return (
    <div className='profile-form'>
      <div>Component：{tag}</div>
      <h3>Base Config</h3>
      {Object.entries(schema).map(([key, value]) => {
        if (value.type === 'number') {
          // @ts-ignore
          return <NumberInput key={key} prop={key} value={selected[key]} {...value} />
        }
        return <div>prop: {key}</div>
      })}
    </div>
  )
}

export default App
