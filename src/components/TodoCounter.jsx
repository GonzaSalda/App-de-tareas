import React from 'react'

const TodoCounter = ({todos, countCompletedTodos }) => {
    return (
        <>
            <h2 className='text-3xl font-semibold text-orange-300'>{todos.length === 0 ? 'No hay tareas': `Completaste ${countCompletedTodos} de ${todos.length} tareas` }</h2>
        </>
    )
}

export default TodoCounter