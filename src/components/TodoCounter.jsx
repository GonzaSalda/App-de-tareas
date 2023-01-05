import React from 'react'

const TodoCounter = ({todos, countCompletedTodos }) => {
    return (
        <>

            <h2 className='text-3xl font-semibold text-orange-300'>Completaste {countCompletedTodos} de {todos.length} tareas</h2>

        </>
    )
}

export default TodoCounter