import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";
import { Outlet, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { TiShoppingCart } from "react-icons/ti";
import { useSelector } from "react-redux";
import { useState } from "react";

function NavBar1() {

  let navigate = useNavigate();

  let cartState = useSelector(state=>state.cart)

  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand as={Link} to="/">E-Commerce</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link as={Link} to="/products">
                Products
              </Nav.Link>
              <Nav.Link as={Link} to="/sign-up">
                SignUp
              </Nav.Link>
              <Nav.Link as={Link} to="/create-product">
                Add Product
              </Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Button variant="outline-warning" disabled={ cartState.length==0? true: false } className="d-flex" onClick={ ()=>navigate("/wishlist") } > 
                <TiShoppingCart/> 
                <sub> {cartState.length} </sub>
              </Button>
               
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </div>
  );
}

export default NavBar1;
