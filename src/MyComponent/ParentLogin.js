import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './ParentLogin.css';
import { Navigate, NavLink } from 'react-router-dom';
import axios from "axios";
import { useNavigate } from "react-router-dom";

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
  const handleClick = () => navigate('/parentinfo');
  const login = (e) => {
    e.preventDefault();
    axios.post("http://localhost:9000/ParentLogin", user)
      .then(res => { alert(res.data.message);
      if(res.data.message!=="Password didn't match"){
        handleClick();
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
          <button  style={{ color: "white" }}>
            Submit
          </button>
        </Button>
        <br></br>
        <br></br>
        <NavLink to="/ParentReg">New User ? SignUp</NavLink>
      </Form>
    </div>
  )
}

