import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const Products1 = () => {
  // JSON - Javascript Object Notation - {  }

  let [products, setProducts] = useState(null);

  useEffect(() => {
    let fetchData = async () => {
      let res = await fetch("http://localhost:4000/products", {
        method : "GET"
      });
      
      let data = await res.json();
      setProducts(data);
    };
    fetchData();
  }, []);


  return (
    <div className="container">
      <div className="d-flex justify-content-between">
        <Button as={Link} to="/" variant="primary">
          Back to Home
        </Button>
        <h1> Total Products : {products.length} </h1>
      </div>
      <section className="row">
        { products !== null &&
          products.map((product) => (
            <Card style={{ width: "18rem", height:"auto" }} className="m-3 d-grid align-item-between" key={product.id}>
              <article>
                <Card.Img variant="top" src={product.images[0]} />
                <Card.Body>
                  <Card.Title>{product.title}</Card.Title>
                  <Card.Text> {product.brand}</Card.Text>
                  <Card.Text> {product.description}</Card.Text>
                  <Card.Text> {product.price}</Card.Text>
                </Card.Body>
              </article>
              <hr />
              <center>
                <Button variant="primary">Add to Card</Button>
              </center>
            </Card>
          ))}
      </section>
    </div>
  );
};

export default Products1;
