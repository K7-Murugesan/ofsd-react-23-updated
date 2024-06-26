import React, { useState } from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

import Container from "@mui/material/Container";
import { Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const CreateProduct = () => {
  let [product, setProduct] = useState( {
    title : '',
    description : "",
    price : 50,
    discountPercentage : 25,
    rating : 6.5,
    stock : 500,
    brand : "",
    category : "",
    thumbnail : "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
    images : ["https://cdn.dummyjson.com/product-images/1/1.jpg"]
  }  )

  let navigate = useNavigate();

  let handleChange = (e) => {
      let { name, value } = e.target
      setProduct(  { ...product, [name] : value  }   )
  }

  let handleSubmit = (e) => {
      e.preventDefault();
      console.log( product );

      fetch( "http://localhost:4000/products", {
        method : "POST",
        headers : {
          "Content-type" : "application/json"
        },
        body : JSON.stringify( product )
      } )
      .then( ()=> {
        Swal.fire({
          title: "Good job!",
          text: "Successfully Added!",
          icon: "success"
        });
        navigate( "/products" )
      } )
      .catch( (err)=>{
        Swal.fire({
          title: "Error!",
          text: "Data Not added!",
          icon: "error"
        });
      }   )
  }


  return (
    <div>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5">
            Create New Product
          </Typography>
          <Box
            component="form"
            noValidate
            sx={{ mt: 3 }}
            onSubmit={ handleSubmit  }
          >
            <TextField
              required
              fullWidth
              id="title"
              label="Enter Title"
              name="title"
              autoComplete="title"
              value={product.title}
              onChange={ handleChange }
            />
            <TextField
              required
              fullWidth
              name="description"
              label="Description"
              id="description"
              autoComplete="new-password"
              sx={{ mt: 3 }}
              value={product.description}
              onChange={ handleChange }
            />
            <Grid container spacing={4}>
              <Grid item xs={3}>
                <TextField
                  required
                  fullWidth
                  name="price"
                  label="Price"
                  id="price"
                  type="number"
                  autoComplete="new-price"
                  sx={{ mt: 3 }}
                  value={product.price}
                  onChange={ handleChange }
                />
              </Grid>
              <Grid item xs={3}>
                <TextField
                  required
                  fullWidth
                  name="discountPercentage"
                  label="Discount"
                  id="discountPercentage"
                  type="number"
                  autoComplete="new-discount"
                  sx={{ mt: 3 }}
                  value={product.discountPercentage}
                  onChange={ handleChange }
                />
              </Grid>
              <Grid item xs={3}>
                <TextField
                  required
                  fullWidth
                  name="rating"
                  label="Rating"
                  id="rating"
                  type="number"
                  autoComplete="new-rating"
                  sx={{ mt: 3 }}
                  value={product.rating}
                  onChange={ handleChange }
                />
              </Grid>
              <Grid item xs={3}>
                <TextField
                  required
                  fullWidth
                  name="stock"
                  label="Stock"
                  id="stock"
                  type="number"
                  autoComplete="new-stock"
                  sx={{ mt: 3 }}
                  value={product.stock}
                  onChange={ handleChange }
                />
              </Grid>
            </Grid>
            <TextField
              required
              fullWidth
              name="brand"
              label="Brand"
              id="brand"
              autoComplete="new-brand"
              sx={{ mt: 3 }}
              value={product.brand}
              onChange={ handleChange }
            />
            <TextField
              required
              fullWidth
              name="category"
              label="Category"
              id="category"
              autoComplete="new-category"
              sx={{ mt: 3 }}
              value={product.category}
              onChange={ handleChange }
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Add Item
            </Button>
          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default CreateProduct;
