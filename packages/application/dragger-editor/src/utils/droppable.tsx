import { CSSProperties, useRef, useState } from 'react'
import { DropTargetMonitor, useDrop } from 'react-dnd'
import { defalutSetting, componentMapping } from '../utils/defaultSetting'

import { Layout, Responsive, WidthProvider } from 'react-grid-layout'
const ResponsiveReactGridLayout = WidthProvider(Responsive)
export interface ComponentType {
  id: number | undefined
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  style: any
  com?: JSX.Element
  component?: React.FC
}
const style: CSSProperties = {
  // position: "relative",
  flex: 1,
  minWidth: 400,
  border: '5px solid green'
}
export default function Preview() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const componentList = useRef<React.FC<any>[]>([])
  const [layouts, setLayout] = useState<Layout[]>([])
  const [, drop] = useDrop(() => ({
    accept: 'Draggable-Component',
    drop: (item: { type: string }, monitor: DropTargetMonitor) => {
      const component = componentMapping.get(item.type)
      // 这里做映射
      //@ts-ignore
      componentList.current.push(component)
      setLayout((oldLayout) => {
        const lay = defalutSetting.get(item.type)!
        const layout = {
          ...lay,
          x: oldLayout.length * 3,
          i: new Date().getTime().toString()
        }
        return [...oldLayout, layout]
      })
    }
  }))
  return (
    <div style={style} ref={drop}>
      <ResponsiveReactGridLayout
        className='layout'
        rowHeight={100}
        layouts={{ layouts }}
        isDroppable
      >
        {componentList.current.map((FnComponent, ind) => (
          <div key={ind} data-grid={layouts[ind]}>
            <FnComponent style={{ width: '100%', height: '100%' }} />
          </div>
        ))}
      </ResponsiveReactGridLayout>
    </div>
  )
}
