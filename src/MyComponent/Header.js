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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from "react-router-dom";
export const Header = () => {
  return (
    <div>

      {/* <div className="topnav">
        <div className="topnav-right">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/Contact">Contact</NavLink>
          <NavLink to="/Login">Login</NavLink>
        </div>
        <div className='home'>
          <center><h1>Child Vaccination</h1></center>
          <img src='https://www.statnews.com/wp-content/uploads/2021/07/AdobeStock_416730149.jpeg' height={69} width={110}></img>
          <div className='head'>
            <h1>Child Vaccination</h1>
          </div>
        </div>

      </div> */}
      <nav class="navbar navbar-light bg-light justify-content-between">
        <a class="navbar-brand" href="#">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdZI5YcSn5FgvoounJBGrRQKVfHGitsKB4bLcFoCxJPXM7fo8XYF3WAojJyH-lK4B5mR0&usqp=CAU" width="70" height="45" class="d-inline-block align-top" alt=""></img>
          Immutime
        </a>
        {/* <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class='nav-item active'>
              <NavLink to="/">Home</NavLink>
            </li>
          </ul>
        </div> */}
        <NavLink to="/">Home</NavLink>
          <NavLink to="/Contact">Contact</NavLink>
          <NavLink to="/Login">Login</NavLink>
      </nav>

      
    </div>
  )
}

