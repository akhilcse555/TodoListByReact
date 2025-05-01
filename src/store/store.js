import todoReducer from '../slice/reducerSilce'
import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({
    reducer: {
        todolist: todoReducer,
},
});

export default store;