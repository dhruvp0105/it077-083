import React from 'react'
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import Button from 'react-bootstrap/Button';
// import { Navigate, NavLink } from 'react-router-dom';
// import { ParentLogin } from './ParentLogin';
import "./Header.css";
import { NavLink  } from "react-router-dom";
export const Header = () => {
  return (
    <div>
    
      <div className="topnav">
        <div className="topnav-left">
        
          <NavLink  to="/">Home</NavLink>
          <NavLink  to="/Contact">Contact</NavLink>
        </div>
        {/* <NavLink className="active" to="/">Home</NavLink>
        <NavLink to="/Home">Contact</NavLink> */}
        <div className="topnav-right">
          <NavLink to="/">Search</NavLink>
          <NavLink to="/Login">Login</NavLink>
        </div>
      </div>
    </div>
  )
}

