import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './ParentLogin.css';
import { ParentReg } from './ParentReg';
import { NavLink } from 'react-router-dom';

export const ParentLogin = () => {
  return (
    <div className='card1'>
    <center>
    <h1>Parent Login</h1>
    </center>
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
      <br></br>
      <br></br>
      <NavLink to="/ParentReg">New User ? SignUp</NavLink>
    </Form>
    </div>
  )
}

