import { createSlice } from "@reduxjs/toolkit";

const initialState = 'SHOW_ALL'

const filterSlice = createSlice({
    name: "visibilityFilter",
    initialState,
    reducers: {
        setVisibilityFilter: (state, action) => {
            state = action.payload.filter
            return state
        }
    }
})

export const { setVisibilityFilter } = filterSlice.actions
export default filterSlice.reducer