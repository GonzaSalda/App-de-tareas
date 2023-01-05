import React from 'react'
import CloseIcon from '../IconsJSX/CloseIcon'

const TodoItem = ({ item,deleteTodo,completeTodo }) => {
    return (
        <>

            <div className='flex justify-between items-center bg-white rounded-md my-2 px-2 w-auto border-2 border-gray-200 overflow-hidden'>
                <button className={`rounded-full w-5 h-5 border-2 mb-1 ${item.completed && "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 "}`} onClick={() => completeTodo(item.id)}></button>
                <li className={`text-gray-400 px-2 text-2xl mb-2 ${item.completed && "line-through"} `}>{item.text}</li>
                <button onClick={ ()=> deleteTodo(item.id)}><CloseIcon className='fill-gray-300' /></button>
            </div>



        </>
    )
}

export default TodoItem