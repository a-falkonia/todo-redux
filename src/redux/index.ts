import { configureStore } from '@reduxjs/toolkit'
import todoReducer from './todoSlice'
import filterReducer from './filterSlice'

const store = configureStore({ reducer: { todos: todoReducer, filters: filterReducer } })

export type TodoState = ReturnType<typeof store.getState>;
export type FilterState = ReturnType<typeof store.getState>
export default store