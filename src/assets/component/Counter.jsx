import React, { useState } from 'react'

export default function Counter() {
    const [count, setCount] = useState(0)
  return (
    <div>
       <h2> Counter</h2>
      <p className="count-display">Count: {count}</p>
      <button className="btn" onClick={() => setCount(count - 1)}>-</button>
      <button className="btn" onClick={() => setCount(count + 1)}>+</button>
    </div>
  )
}
