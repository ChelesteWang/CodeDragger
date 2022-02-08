import React, { Suspense, useMemo, FC, ComponentType, useEffect } from 'react'
import { dependencies } from './dependencies'
import { getRemoteComponent } from './service'
import 'zarm/dist/zarm.css'
import 'react-vant/lib/index.css'

// new function to run component
const getParsedModule = (code: string) => {
  let module = {
    exports: {}
  }
  const require = (name: string): any => {
    return dependencies[name]
  }
  Function('require, exports, module', code)(require, module.exports, module)
  return module
}

const fetchComponent = async (url: string) => {
  const text = await getRemoteComponent({ url })
  const module = getParsedModule(text)
  return { default: module.exports } as any
}

const RemoteComponent: any = ({ name, children, ...props }: any) => {
  const Component = useMemo(() => {
    // @ts-ignores
    return React.lazy(async () => {
      const module = await fetchComponent(name)
      console.log({ default: module.default || module })
      return { default: module.default.default }
    })
  }, [name])

  useEffect(() => {
    console.log(Component)
  })

  return (
    <Suspense
      fallback={
        <div
          style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}
        >
          <span style={{ fontSize: 50 }}>Loading...</span>
        </div>
      }
    >
      <Component {...props}>{children}</Component>
    </Suspense>
  )
}

export default React.memo(RemoteComponent)
