import { createSlice } from '@reduxjs/toolkit'

const todoSlice = createSlice({
    name: 'todolist',
    initialState: {
        todolist: [],
    },
    reducers: {
        addTodo: (state,action) => {
            state.todolist.push({text: action.payload,id: Date.now(),status: false})
        },
        toggleTodo: (state,action) => {
            const toggle = state.todolist.find((e) => e.id === action.payload);
            if(toggle)
            {
                toggle.status = !toggle.status
            }
        },
        deleteTodo: (state,action) => {
            state.todolist = state.todolist.filter((e) => e.id !== action.payload);
        },
    },
})

export const {addTodo , toggleTodo, deleteTodo} = todoSlice.actions;

export default todoSlice.reducer;