import { createSlice } from "@reduxjs/toolkit";

let cartSlice = createSlice( {
    name : "cart",
    initialState : [],
    reducers : {
       addToCart : function(state,action){  // action = { payload : product }
           state.push( action.payload )
       },
       removeFromCart : function(state,action){
            return state.filter( reduxItem => reduxItem.id !== action.payload )
       }
    }
} )


export default cartSlice.reducer

export let { addToCart, removeFromCart } = cartSlice.actions