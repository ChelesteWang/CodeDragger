import React from 'react'
import { useDrag } from 'react-dnd'
export function WithDraggable(
  itemType: string,
  payload?: Record<string, unknown>
) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (Component: React.FC<any>): React.FC<any> => {
    return function DraggableComponent(props) {
      const _props = { ...props }
      if (props.children) {
        delete _props.children
      }
      const [, drag] = useDrag(() => ({
        type: 'Draggable-Component',
        item: {
          type: Component,
          props: {
            ...payload,
            ..._props
          }
        }
      }))
      return (
        <div
          ref={drag}
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          {props.children ? props.children : itemType}
        </div>
      )
    }
  }
}
