import React, { Suspense } from 'react'
import { FC } from 'react'
import { Route, Routes } from 'react-router'
import { BrowserRouter as Router } from 'react-router-dom'
import RemoteComponent from '@cdl-pkg/remote-component'
import SignIn from './components/SignIn/SignIn'
import SignUp from './components/SignUp/SignUp'
import Workspace from './components/Workspace/index'

const DarggerEditor = React.lazy(() => import('@cdl-pkg/dragger-editor'))

const Hello = () => {
  return <div>hello</div>
}
const items = [
  'https://static.zhongan.com/website/health/zarm/images/banners/1.png',
  'https://static.zhongan.com/website/health/zarm/images/banners/2.png',
  'https://static.zhongan.com/website/health/zarm/images/banners/3.png'
]

const Test = () => {
  return (
    <div>
      <RemoteComponent name='61ff40f0ec3be24090be5e91' items={items} />
      <RemoteComponent name='61ff47c9ec3be24090c025a5' images={items} />
      <RemoteComponent name='61ff4a88ec3be24090c0d056' />
    </div>
  )
}

const routes = [
  { name: 'main', path: '/', component: <Hello />, key: 'hello' },
  { name: 'login', path: '/login', component: <SignIn />, key: 'login' },
  { name: 'register', path: '/register', component: <SignUp />, key: 'regis' },
  {
    name: 'workspace',
    path: '/workspace',
    component: <Workspace />,
    key: 'workspace'
  },
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
