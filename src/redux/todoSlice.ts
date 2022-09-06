import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  {
    id: 1,
    description: 'Walk the dog',
    completed: false,
  },
  {
    id: 2,
    description: 'Code the Todo App',
    completed: true,
  },
  {
    id: 3,
    description: 'Practice Leetcode',
    completed: true,
  },
];

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: Date.now(),
        description: action.payload.description,
        completed: false,
      };
      state.push(newTodo);
    },

    toggleTodo: (state, action) => {
      return state.map(todo => todo.id === action.payload.id ?
        { id: todo.id, description: todo.description, completed: !todo.completed } : todo
      )
    },

    deleteTodo: (state, action) => {
      return state.filter(todo => todo.id !== action.payload.id)
    }
  },
});

export const { addTodo, toggleTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
