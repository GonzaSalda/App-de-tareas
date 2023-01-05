import React from 'react'
import TodoItem from './TodoItem'

const todos = [
    {
        text:"Practicar react",
        id: 1,
        completed:true,
    },
    {
        text:"Practicar JS",
        id: 2,
        completed:false,
    }
]


const TodoList = () => {
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