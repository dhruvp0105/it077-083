import React from "react";
import "./Dashboard.css";
import Option from "./Option";
import { Link } from "react-router-dom";
const Dashboard = () => {
  return (
    < div className="div5">
      <ul>
        <li>
          <Link to="/childinfo">
            <Option Value="Add Child info" />
          </Link>
        </li>
        <li>
          <Link to="/patient/searchdoctor">
            <Option Value="View Child info" />
          </Link>
        </li>
        <li>
          <Link to="/patient/appointment-status">
            <Option Value="My Reminder" />
          </Link>
        </li>

        <li>
          <Link to="/book_appointment ">
            <Option Value="Book Appointment" />
          </Link>
        </li>

        <li>
          <Link to="/patient/previousappointments">
            <Option Value="My Appointment" />
          </Link>
        </li>

        <li>
          <Link to="/patient/previousappointments">
            <Option Value="My Profile" />
          </Link>
        </li>
       
      </ul>
    </div>
  );
};

export default Dashboard;