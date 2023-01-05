import React from 'react'

const TodoSearch = ({searchValue, setSearchValue}) => {

    const handleChange = (e) => {
        setSearchValue(e.target.value)
    }

    return (
        <>    
            <input
              className='rounded-md px-4 py-2 w-[400px] border-2  border-gray-200'
              type="text"
              value={searchValue}
              placeholder='Buscar tarea...'
              onChange={handleChange} />
        </>
    )
}

export default TodoSearch