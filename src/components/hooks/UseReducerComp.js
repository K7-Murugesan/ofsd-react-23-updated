import React, { useReducer, useState } from 'react'
import UseMemoComp from './UseMemoComp';

const UseReducerComp = () => {

  let initialState ={
    count : 0, //15
    toggle : true,
    like : 0,
    disLike : 0
  };  

  const reducer = (state, action) => {
        switch( action.type ){
            case "INCREMENT" : return { ...state, count : state.count+1, toggle:true };
            break;
            case "DECREMENT" : return { ...state, count : state.count-1, toggle:true  };
            break
            case 'RESET' : return { ...state, count : 0, toggle : !state.toggle  };
            break;
        }
  }

  let [ state, dispatch ] = useReducer( reducer, initialState )

  return (
    <div>
       <h1> Use-reducer hook </h1>
       { state.toggle && state.count!==0 && <p> Hide and Seek </p> }
       <button onClick={ ()=>dispatch(  { type : 'INCREMENT' }) }>+</button>
       <p> { state.count } </p>
       <button onClick={ ()=>dispatch( { type:'DECREMENT' } ) } >-</button>
       <button onClick={()=> dispatch( { type : 'RESET' } ) }> Reset </button>
       <UseMemoComp/>
    </div>
  )
}

export default UseReducerComp
