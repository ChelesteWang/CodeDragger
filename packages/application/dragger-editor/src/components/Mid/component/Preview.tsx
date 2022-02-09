/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {
  CSSProperties,
  useContext,
  useEffect,
  useRef,
  useState
} from 'react'
import { useDrop } from 'react-dnd'
import { Layout, Responsive, WidthProvider } from 'react-grid-layout'
import DeleteIcon from './DeleteIcon'
import { GenNonDuplicateID } from '../../../utils'
import { Context, layoutManager } from '../../../store'
import RemoteComponent from '@cdl-pkg/remote-component'
import './Preview.css'
import { jsonSchemaFindByIDAction } from '../../../api'
import { useParams } from 'react-router-dom'

const ResponsiveReactGridLayout = WidthProvider(Responsive)
export interface LayoutType extends Layout {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  // component: React.FC<any>
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  // dProps: any
}
const style: CSSProperties = {
  width: '100%',
  height: '100%'
}
const Preview: React.FC = () => {
  const [layouts, setLayout] = useState<LayoutType[]>([])
  const index = useRef<number>(0)
  const { components, dispatch } = useContext(Context)
  const { id } = useParams()
  useEffect(() => {
    const fetchData = async()=>{
      const result = await jsonSchemaFindByIDAction(id)
      console.log(result,"result");
      setLayout(result.info.jsonSchema.layout||[])
    }
    fetchData()
  },[])

  const [, drop] = useDrop(() => ({
    accept: 'Draggable-Component',
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    drop: (item: { type: React.FC<any>; props: any }) => {
      // TODO: 这里的 i 改为使用 GenNonDuplicateID 生成
      // TODO: props 提交到 statemanager 完成双向绑定（注册组件）
      const key = GenNonDuplicateID()
      dispatch({ type: 'addNode', payload: { key: key, node: item.props } })
      setLayout((oldLayout) => [
        ...oldLayout,
        {
          i: key,
          x: 0,
          y: Infinity,
          w: parseFloat(item.props.style.width),
          h: parseFloat(item.props.style.height),
        }
      ])
    }
  }))
  const removeItem = (key: string) => {
    setLayout((oldLayouts) => {
      dispatch({ type: 'deleteNode', payload: { key } })
      const newLayouts = oldLayouts.filter((layout) => layout.i !== key)
      return [...newLayouts]
    })
  }
  const handleDoubleClick = (key: string) => {
    return () => {
      console.log(key)
    }
  }
  const handleLayoutChange = (layout: Layout[]) => {
    // console.log(layout)
    layoutManager.commit('replaceAll', { value: JSON.stringify(layout) })
    console.log('a11', layoutManager.state)
    // saveToLS('layout', layout)
  }

  return (
    <div style={style} ref={drop}>
      {/* {JSON.stringify(components)} */}
      {/* {JSON.stringify(layouts)} */}
      <ResponsiveReactGridLayout
        className='layout'
        rowHeight={1}
        margin={[0, 0]}
        cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 375 }}
        breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
        onLayoutChange={handleLayoutChange}
        droppingItem={{ i: new Date().getTime().toString(), w: 375, h: 100 }}
        isDroppable
        isBounded
      >
        {layouts.map((layout, ind) => {
          const key = layout.i
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const props: any = components[key]
          if(props?.name) {
            return (
              <div
                key={layout.i}
                data-grid={layouts[ind]}
                onDoubleClick={handleDoubleClick(layout.i)}
              >
                <DeleteIcon componentKey={layout.i} onRemoveItem={removeItem} />
                <RemoteComponent style={style} {...props} />
              </div>
            )
          }
        })}
      </ResponsiveReactGridLayout>
    </div>
  )
}

export default Preview

// function getFromLS(key) {
//   let ls = {}
//   if (global.localStorage) {
//     try {
//       ls = JSON.parse(global.localStorage.getItem('rgl-8')) || {}
//     } catch (e) {
//       /*Ignore*/
//     }
//   }
//   return ls[key]
// }

// function saveToLS(key: string, value: Object) {
//   window.localStorage.setItem(key, JSON.stringify(value))
// }
