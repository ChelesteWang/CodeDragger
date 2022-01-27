import React, { Suspense, useMemo, FC, ComponentType } from 'react'
import { dependencies } from './dependencies'
import { getRemoteComponent } from './service'

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

const fetchComponent = async (name: string): Promise<ComponentType<any>> => {
  const text = await getRemoteComponent({ name })
  const module = getParsedModule(text)
  return { default: module.exports } as unknown as ComponentType<any>
}

interface RemoteComponentProps {
  name: string
  children?: FC
  props?: any
}

const RemoteComponent: FC<RemoteComponentProps> = ({
  name,
  children,
  ...props
}) => {
  const Component = useMemo(() => {
    return React.lazy(async () => fetchComponent(name) as any)
  }, [name])

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
