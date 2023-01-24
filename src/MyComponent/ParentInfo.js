import React from 'react';
import { Button, Navbar } from 'react-bootstrap';
import { NavLink, useNavigate } from 'react-router-dom';
import Dashboard from './Dashboard';
import './Parentinfo.css';
export const ParentInfo = () => {
    const navigate=useNavigate();
    function handleInput(event)
    {
        navigate('/ChildInfo');
    }
    return (
        // <div style={{marginTop:"200px"}} > hello</div>
        <div className='card4'>
         <br></br>
         <br></br>
            {/* <Button type="Button">
                <NavLink to="/childinfo" style={{ color: "white" }}>
                    Add Child Info
                </NavLink>
            </Button>
            <br></br>
            <br></br>
            <Button type="submit">
                <NavLink to="/parentinfo" style={{ color: "white" }}>
                    View Child Info
                </NavLink>
            </Button>
            <br></br>
            <br></br>
            <Button type="submit">
                <NavLink to="/parentinfo" style={{ color: "white" }}>
                    My Reminder
                </NavLink>
            </Button>
            <br></br>
            <br></br>
            <Button type="submit">
                <NavLink to="/parentinfo" style={{ color: "white" }}>
                    Book Appointment
                </NavLink>
            </Button>
            <br></br>
            <br></br>
            <Button type="submit">
                <NavLink to="/parentinfo" style={{ color: "white" }}>
                    My Appointment
                </NavLink>
            </Button>
            <br></br>
            <br></br>
            <Button type="submit">
                <NavLink to="/parentinfo" style={{ color: "white" }}>
                    My Profile
                </NavLink>
            </Button> */}
             <center>
            <input class="btn btn-primary" type="button" onClick={handleInput} value="Add Child info"></input><br></br><br></br>
            <input class="btn btn-primary" type="button" value="View Child info"></input><br></br><br></br>
            <input class="btn btn-primary" type="button" value="My reminder"></input><br></br><br></br>
            <input class="btn btn-primary" type="button" value="Book Appointment"></input><br></br><br></br>
            <input class="btn btn-primary" type="button" value="My Appointment"></input><br></br><br></br>
            <input class="btn btn-primary" type="button" value="My profile"></input><br></br><br></br>
            </center>
        </div>
    )
}
