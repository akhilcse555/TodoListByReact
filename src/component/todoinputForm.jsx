import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { addTodo } from '../slice/reducerSilce'

function TodoinputForm() {
    const {register,handleSubmit, reset} = useForm()
    const dispatch = useDispatch()

    const onSubmit = (data) => {
        dispatch(addTodo(data.todo));
        reset();
    }

    return(
        <form onSubmit={handleSubmit(onSubmit)} className='flex gap-2 justify-center items-center'>
            <h2 className='mt-10'>Input</h2>
            <input 
                {...register("todo",{required: true })} placeholder="Enter your input"
                className='h-12 w-80 mt-10 rounded' />
            <button type="submit" className='rounded p-2 mt-10  bg-blue-400 text-black'>
                submit
            </button>
        </form>
    )
}

export default TodoinputForm
