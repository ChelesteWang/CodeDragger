import React from 'react'
interface IProps {
  componentKey: string
  onRemoveItem: (i: string) => void
}
const DeleteIcon: React.FC<IProps> = (props) => {
  const { componentKey, onRemoveItem } = props
  const removeStyle: React.CSSProperties = {
    position: 'absolute',
    right: '2px',
    top: 0,
    cursor: 'pointer'
  }
  return (
    <span
      className='remove'
      style={removeStyle}
      onClick={() => {
        onRemoveItem(componentKey)
      }}
    >
      x
    </span>
  )
}
export default DeleteIcon
