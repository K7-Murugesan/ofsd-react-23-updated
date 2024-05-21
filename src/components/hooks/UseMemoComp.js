import React, { useMemo, useState } from 'react'

const UseMemoComp = () => {

    //Performance optimization -- memoization or memorisation

    let[count1, setCount1] = useState( 0 )
    let[count2, setCount2] = useState( 5 )


    let expensiveFunction = () => {
        for( let i=0; i<100000000; i++ ){}
    }
    // expensiveFunction()

    useMemo( ()=>{
        expensiveFunction();
    },[count1] )


  return (
    <div>
       <h3> Use-Memo Hook </h3>

        <button onClick={()=>setCount1( count1+1 )}>+</button>
            <p> {count1} </p>
        <button onClick={()=>setCount1( count1-1 )}>-</button>
        <button onClick={()=>setCount2( count2+1 )}>+</button>
            <p> {count2} </p>
        <button onClick={()=>setCount2( count2-1 )}>-</button>
    </div>
  )
}

export default UseMemoComp
