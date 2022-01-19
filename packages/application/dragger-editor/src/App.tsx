import { FC } from 'react'
import Nav from '@/components/Nav/Nav'
import Left from '@/components/Left/Left'
import Mid from '@/components/Mid/Mid'
import Right from '@/components/Right/Right'

const App: FC = () => {
  return (
    <div className='app'>
      <div>
        <Nav />
      </div>
      <div>
        <Left />
        <Mid />
        <Right />
      </div>
    </div>
  )
}

export default App
