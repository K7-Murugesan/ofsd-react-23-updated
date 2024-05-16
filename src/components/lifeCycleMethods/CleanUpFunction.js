import React, { useState,useEffect } from 'react'


const ParentComponent = () => {
    let[show, setShow]= useState( true )

    return (
        <div>
            <h1> Clean Up Function </h1>

            <button onClick={ ()=>setShow(!show) }> Toggle </button>
            { show && <ChildComp/>}
        </div>
    )
}


const ChildComp = () => {

  useEffect( ()=>{
    let random = Math.floor( Math.random()*100 )

    let timer = setInterval( ()=>{
        console.log( "Number", random );
    }, 1000 )

    //Cleanup Function - to prevent memory leakage
    //To handle unmounting Phase
    return ()=>{
        clearInterval( timer )
    }

  }, [] )
    
  return (
    <div>
       <h1> Clean Up space </h1>  
    </div>
  )
}

export default ParentComponent;
