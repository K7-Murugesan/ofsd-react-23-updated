import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";

 const store = configureStore( {
    //Root Reducer
    reducer : { 
        cart : cartSlice, // reducer 
        // price : increasePriceSlice
    }
} )  

export default store;