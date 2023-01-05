import React from 'react'
import CloseIcon from '../IconsJSX/CloseIcon'

const TodoItem = ({ todos }) => {
    return (
        <>

            <div className='flex justify-between items-center bg-white rounded-md my-2 px-2 w-[300px] border-2 border-gray-200'>
                <button className={`rounded-full w-5 h-5 border-2 mb-1 ${todos.completed && "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 "}`}></button>
                <li className={`text-gray-400 px-2 text-2xl mb-2 ${todos.completed && "line-through"} `}>{todos.text}</li>
                <button><CloseIcon className='fill-gray-300' /></button>
            </div>



        </>
    )
}

export default TodoItem