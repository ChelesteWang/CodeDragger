import React from 'react'
import { useDrag } from 'react-dnd'
export function WithDraggable(
  itemType: string
): (component: React.FC) => React.FC {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (Component: React.FC<any>): React.FC => {
    return function DraggableComponent(props) {
      const [, drag] = useDrag(() => ({
        type: 'Draggable-Component',
        item: { type: itemType }
      }))
      return (
        <div ref={drag}>
          <Component {...props} />
        </div>
      )
    }
  }
}
