import { FC } from 'react'
import Nav from './components/Nav/Nav'
import Left from './components/Left/Left'
import Mid from './components/Mid/Mid'
import Right from './components/Right/Right'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import './main.css'

const App: FC = () => {
  return (
    <div className='app'>
      <DndProvider backend={HTML5Backend}>
        <div>
          <Nav />
        </div>
        <div>
          <Left />
          <Mid />
          <Right />
        </div>
      </DndProvider>
    </div>
  )
}

export default App
