import { useSelector } from 'react-redux'
import React from 'react';
import { useDispatch } from 'react-redux'
import { deleteTodo } from '../slice/reducerSilce';

const TodoListElement = () => {
    const todos = useSelector((state) => state.todolist.todolist);
    const dispatch = useDispatch()
    console.log(todos);
    return (
        <ul className='  text-center'>
            {todos.map((todo) => (
                <li key={todo.id} className='flex gap-3 text-black justify-center
                 display-box items-center mt-3'>
                    <div className='border rounded p-2 bg-yellow-300 cursor-pointer hover:text-blue-600'>
                        {todo.text}
                    </div>
                    <button onClick={() => dispatch(deleteTodo(todo.id))} className='border rounded text-center p-2 bg-blue-200'>Delete</button>
                </li>
            ))}
            
        </ul>
    )
}

export default TodoListElement;