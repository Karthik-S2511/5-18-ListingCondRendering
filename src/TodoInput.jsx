import React from 'react'
import { useState } from 'react'

const TodoInput = ({ addTodos }) => {
  const [value, setValue] = useState('')
  return (
    <div>
      <input
        value={value}
        type='text'
        placeholder='Enter New Todo'
        onChange={(e) => {
          setValue(e.target.value)
        }}
      />
      <button
        onClick={() => {
          // console.log(value)
          addTodos(value)
          setValue('')
        }}
      >
        Add
      </button>
    </div>
  )
}

export default TodoInput
