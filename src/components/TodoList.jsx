import React from 'react'
import TodoItem from './TodoItem'


const TodoList = ({todos, deleteTodo,completeTodo}) => {
  return (
    <>

          <div className='overflow-hidden '>
          {todos.map((item) => (
            <TodoItem key={item.id} item={item} deleteTodo={deleteTodo} completeTodo={completeTodo}/>
            ))}
          </div>

    </>
  )
}

export default TodoList