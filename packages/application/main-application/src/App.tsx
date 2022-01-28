import React, { Suspense } from 'react'
import { FC } from 'react'
import { Route, Routes } from 'react-router'
import { BrowserRouter as Router } from 'react-router-dom'
import RemoteComponent from '@cdl-pkg/remote-component'

const DarggerEditor = React.lazy(() => import('@cdl-pkg/dragger-editor'))

const Hello = () => {
  return <div>hello</div>
}

const Login = () => {
  return <div>login</div>
}

const Workspace = () => {
  return <div>workspace</div>
}

const Test = () => {
  return <RemoteComponent name="Test" />
}

const routes = [
  { name: 'main', path: '/', component: <Hello />, key: 'hello' },
  { name: 'login', path: '/login', component: <Login />, key: 'login' },
  {
    name: 'lowcode',
    path: '/editor',
    component: <DarggerEditor />,
    key: 'lowcode'
  },
  {
    name: 'workspace',
    path: '/workspace',
    component: <Workspace />,
    key: 'workspace'
  },
  {
    name: 'test',
    path: '/test',
    component: <Test />,
    key: 'test'
  }
]

const App: FC = () => {
  return (
    <div className='main'>
      <Suspense fallback={<div>Loading...</div>}>
        <Router>
          <Routes>
            {routes.map((item) => (
              <Route path={item.path} element={item.component} key={item.key} />
            ))}
          </Routes>
        </Router>
      </Suspense>
    </div>
  )
}

export default App
