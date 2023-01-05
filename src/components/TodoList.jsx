import React from 'react'
import TodoItem from './TodoItem'


const TodoList = ({todos, deleteTodo,completeTodo}) => {
  return (
    <>

          <ul>
          {todos.map((item) => (
            <TodoItem key={item.id} item={item} deleteTodo={deleteTodo} completeTodo={completeTodo}/>
            ))}
          </ul>

    </>
  )
}

export default TodoList