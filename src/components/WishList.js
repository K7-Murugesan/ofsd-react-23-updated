import { Typography } from "@mui/material";
import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { BsFillCartXFill } from "react-icons/bs";
import { removeFromCart } from "../store/cartSlice";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import { IoArrowBackCircleSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const DemoPaper = styled(Paper)(({ theme }) => ({
  width: 120,
  height: 120,
  padding: theme.spacing(2),
  ...theme.typography.body2,
  textAlign: "center",
}));

const WishList = () => {
  let reduxState = useSelector((state) => state.cart);

  // console.log(reduxState);

  let navigate = useNavigate()
  let dispatch = useDispatch();

  let removeDispather = (id) => {
    dispatch(removeFromCart(id));
  };

  return (
    <div>
      <section className="row">
        {reduxState.length != 0 ? (
          reduxState.map((product) => (
            <Card
              style={{ width: "18rem", height: "auto" }}
              className="m-3 d-grid align-item-between"
              key={product.id}
            >
              <article>
                <Card.Img variant="top" src={product.images[0]} />
                <Card.Body>
                  <Card.Title>{product.title}</Card.Title>
                  <Card.Text> {product.category}</Card.Text>
                  <Card.Text> {product.description}</Card.Text>
                  <Card.Text> {product.price}</Card.Text>
                </Card.Body>
              </article>
              <Card.Footer>
                <Button
                  className="mx-2"
                  variant="danger"
                  onClick={() => removeDispather(product.id)}
                >
                  <BsFillCartXFill />
                </Button>
              </Card.Footer>
            </Card>
          ))
        ) : (
          <div className="container d-flex ">
            <Button variant="secondary" style={{height:"50px"}} onClick={ ()=>navigate("/products") }>
              <IoArrowBackCircleSharp />
            </Button>
            <Stack direction="row" spacing={2}>
              <DemoPaper variant="elevation">Move to Products </DemoPaper>
              <DemoPaper variant="outlined">Purchase Something</DemoPaper>
            </Stack>
          </div>
        )}
      </section>
    </div>
  );
};

export default WishList;
