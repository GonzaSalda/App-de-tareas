import TodoCounter from "./components/TodoCounter"
import TodoCreate from "./components/TodoCreate"
import TodoList from "./components/TodoList"
import TodoSearch from "./components/TodoSearch"

const App = () => {
  return (
    <>





      <main className="relative container mx-auto  flex flex-col h-[500px] w-[500px] gap-5  justify-center items-center ">
        <h1 className="text-5xl font-semibold text-orange-300">App de tareas</h1>
        <TodoCreate />

        <TodoCounter />
        <TodoSearch />

        <TodoList />

      </main>


    </>
  )
}

export default App