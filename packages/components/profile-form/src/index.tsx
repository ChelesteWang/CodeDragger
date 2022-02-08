// @ts-nocheck
import { FC } from 'react'

import selectedNode from './interface/selectedNode'
import NumberInput from './components/NumberInput'
import SingleChoice from './components/SingleChoice'
import StringArray from './components/StringArray'
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
    },
    "images": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "defaultValues": [
        'http://img2.baidu.com/it/u=98371021,1121096365&fm=253&app=53&size=w500&n=0&g=0n&f=jpeg?sec=1646925132&t=f0c793085fc57119a78220e8bbf93962',
        'http://img1.baidu.com/it/u=3788606852,2363382091&fm=253&app=53&size=w500&n=0&g=0n&f=jpeg?sec=1646925132&t=556ed322c34aabcb4329fd2513452a38',
        'http://img2.baidu.com/it/u=3062469291,1117322059&fm=253&app=53&size=w500&n=0&g=0n&f=jpeg?sec=1646925132&t=344dff3be8bb20510487af397a300d87'
      ]
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
        else if (value.type === 'array') {
          // @ts-ignore
          return <StringArray key={key} prop={key} value={selected[key]} {...value}/>
        }
        return <div>prop: {key}</div>
      })}
    </div>
  )
}

export default App
