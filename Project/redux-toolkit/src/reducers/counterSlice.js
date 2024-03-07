import { createSlice } from "@reduxjs/toolkit";
export const counterSlice=createSlice({
    name:"counter",
    initialState:{
        value:0
    },
    reducers: {
        INCR: function(state){state.value += 1},
        DECR: function(state){state.value -= 1}
    }
})
export const {INCR, DECR} = counterSlice.actions
export default counterSlice.reducer