import React from 'react'

const TodoFilter = ({changeFilter}) => {
  return (
    <>
    
    <div className='flex gap-3 text-orange-300 font-semibold'>
        <button onClick={() => changeFilter('all')}>Tareas</button>
        <button onClick={() => changeFilter('completados')}>Completados</button>
        <button onClick={() => changeFilter('pendientes')} >Pendientes</button>
    </div>
    
    </>
  )
}

export default TodoFilter