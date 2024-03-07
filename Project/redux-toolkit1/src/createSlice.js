import { createSlice } from '@reduxjs/toolkit'

const todoSlice = createSlice({
    name: 'todo',
    initialState: [],
    reducers:{
        todoAdded(state, action){
            state.push({
                id: action.payload.id,
                text: action.payload.text,
                completed: false,
            })
        },
        
    }
})

export const {todoAdded} = todoSlice.actions
export default todoSlice.reducer