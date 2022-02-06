import React from 'react'
import { useDrag } from 'react-dnd'
export function WithDraggable(itemType: string) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (Component: React.FC<any>): React.FC<any> => {
    return function DraggableComponent(props) {
      const [, drag] = useDrag(() => ({
        type: 'Draggable-Component',
        item: { type: Component, props }
      }))
      return (
        <div ref={drag} style={{ width: '100%', height: '100%' }}>
          <Component {...props} />
        </div>
      )
    }
  }
}
