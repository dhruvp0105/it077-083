import React from "react";
// import "../App.css";
import { NavLink } from "react-router-dom";

export const Login = () => {
  return (
    <div>
      <div class="d-grid gap-2 col-6 mx-auto">
        <NavLink to="/parentLogin">
          <button class=" btn btn-primary" type="button">
            Parent Login
          </button>
        </NavLink>
        <NavLink to="/hospitalLogin">
          {" "}
          <button class="btn btn-primary" type="button">
            Hospital Login
          </button>
        </NavLink>
      </div>
    </div>
  );
};
