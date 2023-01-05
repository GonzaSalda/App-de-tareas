import React, { useState } from 'react'
import CloseIcon from '../IconsJSX/CloseIcon'


const TodoCreate = () => {

  const [isTodoOpen, setIsTodoOpen] = useState(false)

  const handleOpen = () => {
    setIsTodoOpen(true)
  }
  const handleClose = () => {
    setIsTodoOpen(false)
  }

  return (
    <>

      {
        isTodoOpen && (<>
          <div className='absolute z-10 flex flex-col items-center gap-3'>
          <button onClick={handleClose}><CloseIcon className="fill-gray-400 " /></button>
            <input
              className="rounded-md px-4 py-2 w-[300px] border-2 border-gray-200"
              type="text"
              placeholder='Ingrese una tarea' />
            <button className=' bg-orange-300 border-orange-200 border-2 px-4 py-2 rounded-md'>Agregar</button>
          </div>

          <span className='absolute left-0 w-full h-full  backdrop-blur-sm'></span>
        </>)}


      <button className={`absolute bottom-0 right-0 translate-x-11 border-2 rounded-full w-16 h-16 border-gray-200 flex items-center justify-center text-5xl pb-2 ${isTodoOpen && "hidden"}`} onClick={handleOpen}>+</button>
    </>
  )
}

export default TodoCreate