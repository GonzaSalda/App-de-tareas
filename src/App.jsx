import { useState } from "react"
import TodoCounter from "./components/TodoCounter"
import TodoCreate from "./components/TodoCreate"
import TodoFilter from "./components/TodoFilter"
import TodoList from "./components/TodoList"
import TodoSearch from "./components/TodoSearch"


const App = () => {

  const arrayTodos = [
  ]

  const [searchValue, setSearchValue]= useState('')
  const [todos, setTodos] = useState(arrayTodos)


  let searchedTodos = []

  if(!searchValue > 1){
    searchedTodos= todos
  }else{
    searchedTodos = todos.filter( item =>{
      const todoText = item.text.toLowerCase()
      return todoText.includes(searchValue.toLowerCase())
    })
  }

  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo])
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter((item => item.id !== id)))
  }

  const completeTodo = (id) => {
    const newArray = todos.map((item) => item.id === id ? { ...item, completed: !item.completed } : item)
    setTodos(newArray)
  }


  const [filter, setFilter] = useState('all')

  const changeFilter = (item) => setFilter(item)

  const filteredTodos = () => {
    switch (filter) {
      case 'all':
        return searchedTodos;

      case 'completados':
        return todos.filter((item) => !!item.completed)

      case 'pendientes':
        return todos.filter((item) => !item.completed)

      default:
        return todos;
    }
  }

  const countCompletedTodos = todos.filter((item) => !!item.completed).length
  


  return (
    <>

      <main className="relative container mx-auto  flex flex-col h-screen w-full gap-5  justify-center items-center ">
        <h1 className="text-5xl font-semibold text-orange-300">App de tareas</h1>
        <TodoCreate addTodo={addTodo} />

        <TodoCounter todos={todos} countCompletedTodos={countCompletedTodos}/>
        <TodoSearch  searchValue={searchValue} setSearchValue={setSearchValue}/>

        <TodoList todos={filteredTodos()} deleteTodo={deleteTodo} completeTodo={completeTodo} />
        <TodoFilter changeFilter={changeFilter} />
      </main>


    </>
  )
}

export default App