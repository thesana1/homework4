import React, { useState } from 'react'

export default function Todo() {
  const [input, setInput] = useState("")
  const [todos, setTodos] = useState([])

  const handleAdd = () => {
    if (input.trim()) {
      setTodos([...todos, input])
      setInput("")
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleAdd()
  }
  return (
    <div className="box">
      <h2> Todo</h2>
      <input
        className="input"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Enter task"
      />
      <button className="btn" onClick={handleAdd}>Add</button>
      <ul className="todo-list">
        {todos.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  )
}
