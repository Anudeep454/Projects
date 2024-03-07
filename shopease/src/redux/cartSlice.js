import React from 'react'
import {createSlice} from '@reduxjs/toolkit';

const cartSlice = createSlice( {
    name: 'cart',
    initialState:{
        items: [],
    },

    reducers:{
        addToCart: (state, action) => {
            const {id, title, price, rating} = action.payload;
            const product = state.items.find(item => item.id === id);

            if(existingProduct){
                existingProduct.quantity += quantity;
            }
            else{
                state.items.push({ id, title, price, quantity });
            }
        },
        updateQuantity: (state,action) => {
            const {id, quantity} = action.payload;
            const product = state.items.find(item => item.id === id);

            if(product){
                product.quantity = quantity;
            }
        }
    },
});

export const {addToCart, updateQuantity} = cartSlice.actions;
export default cartSlice.reducer;
