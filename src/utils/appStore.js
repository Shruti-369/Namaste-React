import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

const appStore = configureStore({
    //decides how the state should change based on an action.
    //A reducer is a js pure function that takes the current state and an action as arguments and returns a new state.
    //bcs it redues =>> (previous state + action) → new state

    //this is a big reducer for whole app
    reducer: {
        //each slice will have its own reducer
        cart: cartReducer,
    },

});

export default appStore;