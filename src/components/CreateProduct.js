import React, { useState } from "react";
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

import Container from '@mui/material/Container';
import { Typography } from "@mui/material";

const CreateProduct = () => {

   let [title, setTitle] = useState("") 
   let [description, setDescription] = useState("") 

   let handleSubmit = (e) =>{
       e.preventDefault();

       console.log( { title, description } ); // ShortHand Assigned Property
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
            onSubmit={ handleSubmit }
          >
            <TextField
              required
              fullWidth
              id="title"
              label="Enter Title"
              name="title"
              autoComplete="title"
              value={ title }
              onChange={ (e)=>setTitle( e.target.value ) }
            />
            <TextField
              required
              fullWidth
              name="description"
              label="Description"
              id="description"
              autoComplete="new-password"
              sx={ { mt :3 } }
              value={ description }
              onChange={  (e)=>setDescription(e.target.value) }
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Add Item
            </Button>
            <h1> {title} {description} </h1>
          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default CreateProduct;
