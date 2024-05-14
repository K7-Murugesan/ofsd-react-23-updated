import { TextField } from '@mui/material'
import React, { useRef, useState } from 'react'
import { Button } from 'react-bootstrap'

const UseRefCom = () => {

    let [dummyState, setDummyState] = useState( 0 );

    let inputRef =  useRef();

    let counter = useRef( 0 )

    let handleInput = () => {
        inputRef.current.value = "HElloo"
        inputRef.current.style.backgroundColor = "red"
        inputRef.current.style.color = "white"
        inputRef.current.style.border = "2px blue solid"
    }

    let increase = () => {
        counter.current +=1
        setDummyState( dummyState+1 )
        console.log( counter.current )
    }
    let decrement = () => {
        counter.current -=1
        // setDummyState( dummyState-1 )
        console.log( counter.current )
    }


  return (
    <div>
       <h1> Without Rendering im gonna change the Style of Element</h1> 
        <input ref={ inputRef } type="text" placeholder='Name' /> <br />
        <Button variant='primary' onClick={ handleInput } > Change the Style </Button>
        <br />
        <Button variant='primary' onClick={increase}  > + </Button>
        <h2> {counter.current} </h2>
        <Button variant='primary' onClick={decrement} > -</Button>
    </div>
  )
}

export default UseRefCom
