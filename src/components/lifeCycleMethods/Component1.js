import React, { Component } from 'react'
import { Button } from 'react-bootstrap'

export default class Component1 extends Component {

  constructor(props){
    super(props);
    this.state = {
        count : 0,
        toggle : true
    }
    console.log( "Constructor Called" );
  }
  
//   componentWillMount(){
//     console.log( "Called before render method" );
//   }

  componentDidMount(){
    console.log( "Mounting Phase" );
  }

  shouldComponentUpdate(){
    return true
  }

  componentDidUpdate( prevProps, prevState ){
    if( prevState.count !== this.state.count ){
        console.log( "Updating Phase- Count" );
    }
    else{
        console.log( "Updating - togggle" );
    }
  }

  increse(){
    this.setState( {
        ...this.state,
        count : this.state.count+1
    } )
  }
  decrease(){
    this.setState( {
        ...this.state,
        count : this.state.count-1
    } )
  }

  toggleFun(){
    this.setState( {
        ...this.state,
        toggle : !this.state.toggle
    } )
  }

  render() {
    console.log( "Render Called" );
    return (
      <div>
          <Button variant='primary' onClick={ ()=>{this.increse()} }> + </Button>
                { this.state.count }
          <Button variant='primary' onClick={ ()=>{this.decrease()} }> - </Button>
          <Button variant='primary' onClick={ ()=>{ this.toggleFun() } }> Toggle </Button>

          { this.state.toggle && <ChildComp/> }  

      </div>
    )
  }
}


class ChildComp extends Component{

    // timer (){ 
    //     let random = Math.floor( Math.random()*100 )
    //    return setInterval( ()=> {
    //     console.log(  "Running", random  );
    // }, 2000 ) 
    // }
    timer = null;

    componentDidMount(){
       let random = Math.floor( Math.random()*100 )

       this.timer = setInterval( ()=>{
         console.log( "Number " + random );
       },1000)
    }

    componentWillUnmount(){
        // clearInterval( this.timer() )
        console.log( "Im Removed from dom" );
        clearInterval( this.timer )
    }
    render(){
        return(
            <div>
                <h1> Child Comp </h1>
            </div>
        )
    }
}