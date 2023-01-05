import { useState } from "react"
import TodoCounter from "./components/TodoCounter"
import TodoCreate from "./components/TodoCreate"
import TodoList from "./components/TodoList"
import TodoSearch from "./components/TodoSearch"


const App = () => {

  const arrayTodos = [
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
  
  const[todos, setTodos] = useState(arrayTodos)
  
  console.log(todos)
  
  const addTodo = (newTodo) =>{
    setTodos([...todos, newTodo])
  }

  return (
    <>


      <main className="relative container mx-auto  flex flex-col h-[500px] w-[500px] gap-5  justify-center items-center ">
        <h1 className="text-5xl font-semibold text-orange-300">App de tareas</h1>
        <TodoCreate addTodo={addTodo} />

        <TodoCounter />
        <TodoSearch />

        <TodoList todos={todos} />

      </main>


    </>
  )
}

export default App