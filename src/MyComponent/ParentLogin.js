import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './ParentLogin.css';
import { Navigate, NavLink } from 'react-router-dom';
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { GoogleLogin } from "@react-oauth/google";
import jwt_decode from "jwt-decode";

export const ParentLogin = () => {
  const navigate = useNavigate()
  const [user, setUser] = useState({
    Email: "",
    password: "",
  })
  let name, value;
  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });
  }
  /* navigate('/ParentLogin'); */
  const login = (e) => {
    e.preventDefault();
    axios.post("http://localhost:9000/ParentLogin", user)
      .then(res => {
        alert(res.data.message);
        if (res.data.message === "Password didn't match") {

          navigate('/ParentLogin');

        }
        else if (res.data.message === "User Not registered") {
          navigate("/ParentReg")
        }
        else {
          console.log("hi")
          navigate('/parentinfo')
        }
      })
  }
  return (
    <div className='card1'>
      <center>
        <h1>Parent Login</h1>
      </center>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email:xyz@gmail.com" name="Email" value={user.Email} onChange={handleInputs} />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name="password" value={user.password} onChange={handleInputs} placeholder="Password" />
        </Form.Group>
        <Button type="submit" onClick={login}>
          Submit
        </Button>
        <br></br>
        <br></br>
        <GoogleLogin
          onSuccess={(credentialResponse) => {
            console.log(credentialResponse);
            var decoded = jwt_decode(credentialResponse.credential);
            console.log(decoded);
            // <ChildInfo/>
          }}
          onError={() => {
            console.log("Login Failed");
          }}
        />


        <br></br>
        <NavLink to="/ParentReg">New User ? SignUp</NavLink>
      </Form>
    </div>
  )
}

