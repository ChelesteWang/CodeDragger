import React, { CSSProperties, useRef, useState } from 'react'
import { useDrop } from 'react-dnd'
import { Layout, Responsive, WidthProvider } from 'react-grid-layout'
const ResponsiveReactGridLayout = WidthProvider(Responsive)
export interface ComponentType {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  component: React.FC<any>
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  dProps: any
}
const style: CSSProperties = {
  width: '100%',
  height: '100%'
}
export default function Preview() {
  const componentList = useRef<ComponentType[]>([])
  const [layouts, setLayout] = useState<Layout[]>([])
  const [, drop] = useDrop(() => ({
    accept: 'Draggable-Component',
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    drop: (item: { type: React.FC<any>; props: any }) => {
      componentList.current.push({
        component: item.type,
        dProps: item.props
      })
      setLayout((oldLayout) => [
        ...oldLayout,
        {
          i: new Date().getTime().toString(),
          x: oldLayout.length * 3,
          y: Infinity,
          w: 375,
          h: 10
        }
      ])
    }
  }))
  return (
    <div style={style} ref={drop}>
      <ResponsiveReactGridLayout
        className='layout'
        rowHeight={1}
        layouts={{ layouts }}
        isDroppable
        breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
        cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 375 }}
      >
        {componentList.current.map((IComponent, ind) => {
          const FnComponent = IComponent.component
          return (
            <div key={ind} data-grid={layouts[ind]}>
              <FnComponent
                style={{ width: '100%', height: '100%' }}
                {...IComponent.dProps}
              />
            </div>
          )
        })}
      </ResponsiveReactGridLayout>
    </div>
  )
}
