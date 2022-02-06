import { FC } from 'react'

import selectedNode from './interface/selectedNode'
import NumberInput from './components/NumberInput'

const App: FC<selectedNode> = ({tag,properties} :selectedNode)=>{
    return (<div className='profile-form'>
        <div>Component：{tag}</div>
        <h3>Base Config</h3>
        {Object.entries(properties).map(([key, value])=>{
            if(value.type === 'number') {
                return <NumberInput key={key} prop={key} {...value}/>
            }
            return <div>prop: {key}</div>
        })}
        {/* <h3>Other Options</h3> */}
    </div>)
}

export default App