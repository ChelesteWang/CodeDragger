import userInfoStore from '../store'
import Landing from '@/components/Landing'
import SignIn from '@/components/SignIn/SignIn'
import SignUp from '@/components/SignUp/SignUp'
import Workspace from '@/components/Workspace'
import React, { useState } from 'react'
import { Route, Routes } from 'react-router'
import {
  BrowserRouter as Router,
  useNavigate,
  useLocation
} from 'react-router-dom'
import Nomatch from '@/components/Nomatch'

const DarggerEditor = React.lazy(() => import('@cdl-pkg/dragger-editor'))
const Test = () => {
  return (
    <div>
      {/* <RemoteComponent name='61ff40f0ec3be24090be5e91' items={items} />
      <RemoteComponent name='61ff47c9ec3be24090c025a5' images={items} />
      <RemoteComponent name='61ff4a88ec3be24090c0d056' /> */}
      {/* <RemoteComponent
        name='62011592ec3be240902f635a'
        shapes={'radius'}
        buttonText='Hello!'
      >
        1
      </RemoteComponent> */}
      {/*<RemoteComponent name='62011592ec3be240902f635a' images={items} /> *!/*/}
      {/*<RemoteComponent name='61ff4a88ec3be24090c0d056' buttonText='1' />*/}
    </div>
  )
}
const basicRoute = [
  { name: 'main', path: '/', component: <Landing />, key: 'landing' },
  { name: 'login', path: '/login', component: <SignIn />, key: 'login' },
  { name: 'register', path: '/register', component: <SignUp />, key: 'regis' },
  {
    name: 'workspace',
    path: '/workspace',
    component: <Workspace />,
    meta: {
      login: true
    },
    key: 'workspace'
  },
  {
    name: 'lowcode',
    path: '/editor/:id',
    component: <DarggerEditor />,
    meta: {
      login: true
    },
    key: 'lowcode'
  },
  {
    name: 'test',
    path: '/test',
    component: <Test />,
    key: 'test'
  }
]

function AuthRoute(Component: any, navigate: Function, location: any) {
  let ok = true
  // @ts-ignore
  if (userInfoStore.state?._id == null) {
    ok = false
    if (
      location?.pathname != null &&
      ['/login', '/', '/register'].indexOf(location.pathname) === -1
    ) {
      window.location.href = './login'
    }
  }
  return ok ? Component : null
}

export function CDLRoute() {
  const navigate = useNavigate()
  const location = useLocation()
  return (
    <Routes>
      {basicRoute.map((item) => {
        return item?.meta?.login === true ? (
          <Route
            path={item.path}
            element={AuthRoute(item.component, navigate, location)}
            key={item.key}
          />
        ) : (
          <Route path={item.path} element={item.component} key={item.key} />
        )
      })}
      <Route path='*' element={<Nomatch />} />
    </Routes>
  )
}
