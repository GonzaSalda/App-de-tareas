import React from 'react'
import TodoItem from './TodoItem'


const TodoList = ({todos}) => {
  return (
    <>

          <ul>
          {todos.map((item) => (
            <TodoItem  key={item.id} todos={item}/>
            ))}
          </ul>

    </>
  )
}

export default TodoList