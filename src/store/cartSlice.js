import { createSlice } from "@reduxjs/toolkit";

let storedData = JSON.parse( localStorage.getItem( "cart" ))

// console.log( storedData );

let initialState = storedData.items

// console.log( initialState );

let cartSlice = createSlice( {
    name : "cart",
    initialState, // [ {1}, {2}, {3}, {4} ]
    reducers : {
       addToCart : function(state,action){  // action = { payload : product }
           state.push( action.payload )
           localStorage.setItem( "cart", JSON.stringify ({ "items" : state } )) 
       },
       removeFromCart : function(state,action){ // action = {payload : 1}
            let newState =  state.filter( reduxItem => reduxItem.id !== action.payload )

            localStorage.setItem( "cart", JSON.stringify ({ "items" : newState } )) 
            //    [ {2}, {3}, {4} ]
            // state.filter ( {2} => 3 !==1 /true ) 
            return newState;
       }
    }
} )


export default cartSlice.reducer

export let { addToCart, removeFromCart } = cartSlice.actions