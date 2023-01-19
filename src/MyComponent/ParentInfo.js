import React from 'react';
import { Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

export const ParentInfo = () => {
    return (
        // <div style={{marginTop:"200px"}} > hello</div>
        <div>ParentInfo
         <br></br>
         <br></br>
            <Button type="">
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
            </Button>
        </div>
    )
}
