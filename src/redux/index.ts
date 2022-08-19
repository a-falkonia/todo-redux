import { configureStore } from '@reduxjs/toolkit'
import todoReducer from './todoSlice'

const store = configureStore({ reducer: { todos: todoReducer } })

export type TodoState = ReturnType<typeof store.getState>;
export default store