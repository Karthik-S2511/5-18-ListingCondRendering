import React from 'react'
import { useState } from 'react'
import TodoInput from './TodoInput'
import TodoList from './TodoList'

const TodoApp = () => {
  const [todos, setTodos] = useState([])

  const addTodos = (xyz) => {
    setTodos([...todos, xyz])
    console.log(todos)
  }
  return (
    <div>
      TodoApp
      <TodoInput addTodos={addTodos} />
      <TodoList>
        {todos.map((todo) => {
          return <li>{todo}</li>
        })}
      </TodoList>
    </div>
  )
}

export default TodoApp
