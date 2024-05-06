import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useNavigate } from "react-router";
import { useEffect } from "react";
const Home = () => {

  const [modalShow, setModalShow] = useState(false);
  let [count, setCount] = useState( 0 )
  let [count1, setCount1] = useState( 0 )

  useEffect( ()=>{
    console.log( "For Every render ill execute" );
  } )

  useEffect(  ()=>{
    let function1 = () => {
      console.log( "Only for first render ill execute" );
    }
    function1();
  }, [] )

  useEffect(  ()=>{
    let function1 = () => {
      console.log( "Count 1 has been updated" );
    }
    function1();
  }, [count1] )


  return (
    <div>
      <h1> Home Contents </h1>
      <Button variant="warning" onClick={()=>setCount(count+1)}> + </Button>
         { count }
      <Button variant="warning"> - </Button>
      <Button variant="secondary" onClick={()=>setCount1(count1+1)}> + </Button>
         { count1 }
      <Button variant="secondary"> - </Button>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        Launch vertically centered modal
      </Button>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
};

export default Home;

function MyVerticallyCenteredModal(props) {

    let navigate = useNavigate()

    // function callProducts(){
    //     navigate('/products')
    // }

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Centered Modal</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={()=>{  props.onHide(); navigate("/products");}}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
