import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './ParentReg.css';
import { NavLink } from 'react-router-dom';
export const ParentReg = () => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="text-center">
                                <h1>Registration</h1>
                            </div>
                            <form>
                                <div className="mb-3">
                                    <label className="form-label">Name</label>
                                    <input type="text" className="form-control" id="name1" aria-describedby="name1"></input>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Mobile Number</label>
                                    <input type="tel" className="form-control" id="name2" aria-describedby="name2"
                                        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required></input>
                                </div>
                                <div className="mb-3">
                                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
                                </div>
                                <div className="mb-3">
                                    <label for="exampleInputPassword1" className="form-label">Password</label>
                                    <input type="password" className="form-control" id="exampleInputPassword1"></input>
                                </div>
                                <button type="submit" className="btn btn-primary">Sign in</button>
                                <br></br>
                                    <br></br>
                                    </form>

                                    <NavLink to="/ParentLogin">Already Member ? Click to Login !</NavLink>
                                    </div>
                        </div>
                    </div>
                </div>
            </div>
            );
}
