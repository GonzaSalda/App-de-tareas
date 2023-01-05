import { useState } from "react"
import TodoCounter from "./components/TodoCounter"
import TodoCreate from "./components/TodoCreate"
import TodoList from "./components/TodoList"
import TodoSearch from "./components/TodoSearch"


const App = () => {

  const arrayTodos = [
  ]
  
  const[todos, setTodos] = useState(arrayTodos)
console.log(todos)

  const addTodo = (newTodo) =>{
    setTodos([...todos, newTodo])
  }

  const deleteTodo = (id) =>{
    setTodos(todos.filter((item=> item.id !== id)))
  }

  const completeTodo = (id) =>{
    const newArray = todos.map((item) => item.id === id  ? {...item , completed:!item.completed} : item)
    setTodos(newArray)
    
  }

  return (
    <>


      <main className="relative container mx-auto  flex flex-col h-screen w-full gap-5  justify-center items-center ">
        <h1 className="text-5xl font-semibold text-orange-300">App de tareas</h1>
        <TodoCreate addTodo={addTodo} />

        <TodoCounter />
        <TodoSearch />

        <TodoList todos={todos} deleteTodo={deleteTodo} completeTodo={completeTodo}/>

      </main>


    </>
  )
}

export default App