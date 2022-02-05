import React, { useState } from 'react'

const Counter = () => {
  const [count, setCount] = useState(0)
  return (
    <button
      style={{ color: 'red' }}
      onClick={() => setCount((count) => count + 1)}
    >
      count is: {count}
    </button>
  )
}

export default Counter
