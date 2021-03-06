// @ts-nocheck
import { FC } from 'react'
import NumberInput from './components/NumberInput'
import StringInput from './components/StringInput'
import SingleChoice from './components/SingleChoice'
import StringArray from './components/StringArray'

const App: FC = ({ tag, selectedNode, schema, Ikey,dispatch }) => {
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
              Ikey={Ikey}
              dispatch={dispatch}
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
              Ikey={Ikey}
              value={selectedNode[key]}
              {...value}
              dispatch={dispatch}
            />
          )}else if (value.type === 'string' && value.interaction === 'input') {
            return (
              <StringInput
                key={key}
                prop={key}
                Ikey={Ikey}
                value={selectedNode[key]}
                {...value}
                dispatch={dispatch}
              />
            )
          }
        else if (value.type === 'array') {
          return (
            <StringArray
              key={key}
              prop={key}
              Ikey={Ikey}
              value={selectedNode[key]}
              {...value}
              dispatch={dispatch}
            />
          )
        }
        return <div key={key} >prop: {key}</div>
      })}
    </div>
  )
}

export default App
