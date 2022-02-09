// @ts-nocheck
import { FC } from 'react'
import NumberInput from './components/NumberInput'
import SingleChoice from './components/SingleChoice'
import StringArray from './components/StringArray'

const App: FC = ({ tag, selectedNode, schema, dispatch }) => {
  // TODO: dispatch目前还没做任何处理
  return (
    <div className='profile-form'>
      <div>Component：{tag}</div>
      <h3>Base Config</h3>
      {Object.entries(schema).map(([key, value]) => {
        if (value.type === 'number' && value.interaction === 'input') {
          return (
            <NumberInput
              key={key}
              prop={key}
              value={selectedNode[key]}
              {...value}
            />
          )
        } else if (
          value.type === 'string' &&
          value.interaction === 'single_choice'
        ) {
          return (
            <SingleChoice
              key={key}
              prop={key}
              value={selectedNode[key]}
              {...value}
            />
          )
        } else if (value.type === 'array') {
          return (
            <StringArray
              key={key}
              prop={key}
              value={selectedNode[key]}
              {...value}
            />
          )
        }
        return <div>prop: {key}</div>
      })}
    </div>
  )
}

export default App
