import { FC } from 'react'
import { Route, Routes } from 'react-router'
import { BrowserRouter as Router } from 'react-router-dom'
import DarggerEditor from '@cdl/dragger-editor'

const Hello = () => {
  return <div>hello</div>
}

const Login = () => {
  return <div>login</div>
}

const Workspace = () => {
  return <div>workspace</div>
}

const routes = [
  { name: 'main', path: '/', component: <Hello /> },
  { name: 'login', path: '/login', component: <Login /> },
  { name: 'lowcode', path: '/editor', component: <DarggerEditor /> },
  { name: 'workspace', path: '/workspace', component: <Workspace /> }
]

const App: FC = () => {
  return (
    <div className='main'>
      <Router>
        <Routes>
          {routes.map((item) => (
            <Route path={item.path} element={item.component} />
          ))}
        </Routes>
      </Router>
    </div>
  )
}

export default App
