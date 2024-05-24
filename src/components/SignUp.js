import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { Card } from "react-bootstrap";
import Button from "@mui/material/Button";
import { useForm } from "react-hook-form";
import * as yup from 'yup'
import { yupResolver } from "@hookform/resolvers/yup";

let schema = yup.object().shape( {
  userName : yup.string().required("Name is Required").min(5, "Minimum 4 characters required"),
  email : yup.string().email().required(" Email is required "),
  age : yup.number().required("Age is required").min(25, "Enter above 25").max(50, "Enter below 50"),
  password : yup.string().required( "Password is required" ).min(4,"Min 4 need").max(10,"Max 10 need"),
  confirmPassword : yup.string().required("To confirm enter value").oneOf( [ yup.ref( 'password' ) ], "Password must match"  ) 
} )

let renderCount = 0;

const SignUp = () => {
  renderCount++;

  // let [user, setUser] = useState({
  //   email: "",
  //   userName: "",
  // });

  // let handlechange = (e) => {
  //   let { name, value } = e.target;
  //   setUser({ ...user, [name]: value });
  // };

  let {
    register,
    handleSubmit,
    formState: { errors },
    isValid,
    isDirty
  } = useForm( {
    resolver : yupResolver(schema),
    mode:"onChange"
  } );

  let showRecievedData = (data)=>{
      console.log( data );
  }

  return (
    <div>
      Create Your Account - {renderCount}
      <Card className="w-50 m-auto">
        <Form className="w-75 m-auto" onSubmit={handleSubmit( showRecievedData )}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>User-Name</Form.Label>
            {/* <Form.Control 
            { ...register( "userName", {
              required: "Name Required",
              minLength : {
                value : 5,
                message : "Minimum 5 Chars req"
              }
            } ) }
            type="text" name="userName" placeholder="User-Name" /> */}
            <Form.Control 
            { ...register( "userName") }
            type="text" name="userName" placeholder="User-Name" />
             { errors.userName && <p> {errors.userName.message} </p>  }
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email address</Form.Label>
            {/* <Form.Control
              {...register("email", {
                required: "Email Required",
              })}
              type="email"
              name="email"
              placeholder="name@example.com"
            /> */}
            <Form.Control
              {...register("email")}
              type="email"
              name="email"
              placeholder="name@example.com"
            />
            { errors.email && <p> {errors.email.message} </p>  }
          </Form.Group>
          <Form.Group className="mb-3" controlId="example-age">
            <Form.Label>Age</Form.Label>
            <Form.Control
              {...register("age")}
              name="age"
              placeholder="Enter Your Age"
            />
            { errors.age && <p> {errors.age.message} </p> }
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              {...register("password")}
              type = "password"
              name="password"
              placeholder="Enter Your Password"
            />
            { errors.password && <p> {errors.password.message} </p> }
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.confirmPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              {...register("confirmPassword")}
              type = "password"
              name="confirmPassword"
              placeholder="Enter Your Password"
            />
            { errors.confirmPassword && <p> {errors.confirmPassword.message} </p> }
          </Form.Group>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            disabled = { isDirty && !isValid }
          >
            {" "}
            Submit{" "}
          </Button>
        </Form>
      </Card>
    </div>
  );
};

export default SignUp;
