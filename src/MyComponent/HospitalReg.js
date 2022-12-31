import React from "react";
import { NavLink } from "react-router-dom";
import "./ParentReg.css";

export const HospitalReg = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="card2">
            <div className="text-center">
              <h1>Hospital Register</h1>
            </div>
            <div className="row g-3">
              <div className="col">
                <input
                  type="text"
                  className="form-control "
                  placeholder="Hospital name"
                  aria-label="First name"
                />
              </div>
              <form className="row g-3">
                <div className="col-md-6">
                  <label for="inputEmail4" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="xyz@gmail.com"
                    id="inputEmail4"
                  />
                </div>
                <div className="col-md-6">
                  <label for="inputPassword4" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="inputPassword4"
                  />
                </div>
                <div className="col-12">
                  <label for="inputAddress" className="form-label">
                    Address
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputAddress"
                    placeholder="1234 Main St"
                  />
                </div>

                <div className="col-md-4">
                  <label for="inputCity" className="form-label">
                    City
                  </label>
                  <select id="inputCity" className="form-select">
                    <option selected>Choose...</option>
                    <option>...</option>
                  </select>
                </div>
                <div className="col-md-4">
                  <label for="inputState" className="form-label">
                    State
                  </label>
                  <select id="inputState" className="form-select">
                    <option selected>Choose...</option>
                    <option>...</option>
                  </select>
                </div>
                <div className="col-md-4">
                  <label for="inputZip" className="form-label">
                    Pincode
                  </label>
                  <input type="text" className="form-control" id="inputZip" />
                </div>
                <div className="col-12">
                  <button type="submit" className="btn btn-primary">
                    Sign in
                  </button>
                </div>
              </form>
              <br />
              <NavLink to="/HospitalLogin">
                Already Member ? Click to Login !
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
