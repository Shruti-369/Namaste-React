import {createSlice} from "@reduxjs/toolkit";

const cartSlice = createSlice({
    //name as cart
    name: 'cart',
    initialState: {
        //initial state as arrays named items
        items: []
    },
    //reducer fns corresponding to each action
    reducers: {
        //addItem is a fn(or an action)
        addItem: (state, action) => {
            //mutating the state here (mean directlly changing)
            state.items.push(action.payload);
        },
        removeItem: (state, action) => {
            state.items.pop();
        },
        clearCart: (state, action) => {
            state.items.length = 0;
        },
    },
});


export const {addItem, removeItem, clearCart} = cartSlice.actions;

export default cartSlice.reducer;