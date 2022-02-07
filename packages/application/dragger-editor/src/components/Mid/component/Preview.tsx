import React, { CSSProperties, useState } from 'react'
import { useDrop } from 'react-dnd'
import { Layout, Responsive, WidthProvider } from 'react-grid-layout'
const ResponsiveReactGridLayout = WidthProvider(Responsive)
export interface LayoutType extends Layout {
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
  const [layouts, setLayout] = useState<LayoutType[]>([])
  const [, drop] = useDrop(() => ({
    accept: 'Draggable-Component',
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    drop: (item: { type: React.FC<any>; props: any }) => {
      setLayout((oldLayout) => [
        ...oldLayout,
        {
          i: '' + oldLayout.length,
          x: 0,
          y: Infinity,
          w: 375,
          h: 100,
          component: item.type,
          dProps: item.props
        }
      ])
    }
  }))

  return (
    <div style={style} ref={drop}>
      <ResponsiveReactGridLayout
        className='layout'
        rowHeight={1}
        margin={[0, 0]}
        breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
        cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 375 }}
        droppingItem={{ i: new Date().getTime().toString(), w: 375, h: 100 }}
        isDroppable
        isBounded
      >
        {layouts.map((layout, ind) => {
          const FnComponent = layout.component
          return (
            <div key={layout.i} data-grid={layouts[ind]}>
              <FnComponent
                style={{ width: '100%', height: '100%' }}
                {...layout.dProps}
              />
            </div>
          )
        })}
      </ResponsiveReactGridLayout>
    </div>
  )
}
