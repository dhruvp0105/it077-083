import React from 'react'
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import Button from 'react-bootstrap/Button';
// import { Navigate, NavLink } from 'react-router-dom';
// import { ParentLogin } from './ParentLogin';
import { NavLink } from "react-router-dom";
export const Header = () => {
    return (
        
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <NavLink className="nav-link" to="/">CVS</NavLink>
      
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
              <NavLink className="nav-link" to="/">Home</NavLink>
            </li>
            <li className="nav-item active">
              <NavLink className="nav-link" to="/Login">Login</NavLink>
            </li>
            {/* <li className="nav-item">
              <NavLink className="nav-link" to="/parentReg">SignUp</NavLink>
            </li> */}
       
          </ul>
         
        </div>
      </nav>
        
    )
}

