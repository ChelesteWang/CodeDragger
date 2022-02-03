import { FC } from 'react'
import Nav from './components/Nav/Nav'
import Left from './components/Left/Left'
import Mid from './components/Mid/Mid'
import Right from './components/Right/Right'

const mockNode = {
  type: 'object',
  properties: {
    width: {
      type: 'number',
      minimum: 40,
      maximum: 200,
      interaction: 'slide'
    },
    height: {
      type: 'number',
      minimum: 40,
      maximum: 200,
      interaction: 'slide'
    }
  }
}

const App: FC = () => {
  return (
    <div className='app'>
      <div>
        <Nav />
      </div>
      <div>
        <Left />
        <Mid />
        <Right selectedNode={mockNode} />
      </div>
    </div>
  )
}

export default App
