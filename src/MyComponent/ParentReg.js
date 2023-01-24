import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './ParentReg.css';
import { Navigate, NavLink } from 'react-router-dom';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { auth,provider } from '../backend/firebase';
import {signInWithPopup} from "firebase/auth";
import { ParentLogin } from './ParentLogin';

// import { signInWithGoogle } from '../backend/firebase';

const signInWithGoogle = () => {
    //  const navigate = useNavigate();
    signInWithPopup(auth, provider)
    
      .then((result) => {

        const name = result.user.displayName;
        const email = result.user.email;
        const profilePic = result.user.photoURL;
  
        localStorage.setItem("name", name);
        localStorage.setItem("email", email);
        localStorage.setItem("profilePic", profilePic);

        // navigate("/ParentLogin");
        window.location="/ParentLogin";
      })
      .catch((error) => {
        console.log(error);
      });
  };

export const ParentReg = () => {
    const nevigate=useNavigate()
    const [user, setUser] = useState({
        Name: "",
        Mobile_no: "",
        Email: "",
        password: "",
        reEnterpassword:""

    })
    let name,value;
    const handleInputs=(e)=>{
        name=e.target.name;
        value=e.target.value;

        setUser({...user,[name]:value});
    }
    const postData=async (e)=>{
        register();

        e.preventDefault();
        const {Name,Mobile_no,Email,password}=user
        console.log(user.Email);
        const res=await fetch(
            "https://immutime-default-rtdb.firebaseio.com/ParentRegForm.json",
            {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body:JSON.stringify({
                Name,
                Mobile_no,
                Email,
                password, 
            }),

            }
        );
        console.log(res);

    }
    const register=()=>{
        // postData();
        const {Name,Mobile_no,Email,password,reEnterpassword}=user
        if(Name && Mobile_no && password && (password===reEnterpassword))
        {
            //alert("posted");
            axios.post("http://localhost:9000/ParentReg",user)
            .then( res=>alert(res.data.message))
        }
        else
        {
            alert("Invalid Input");
        }
    }

    return (
        <div>
            <div className="container">
                {/* <div className="row"> */}
                {/* <div className="col-md-6"> */}
                <div className="card2">
                    <div className="text-center">
                        <h1> Parent Registration</h1>
                    </div>
                    <form method="POST">
                        <div className="mb-3">
                            <label className="form-label">Name</label>
                            <input type="text" className="form-control" name="Name" id="name1" aria-describedby="name1" value={user.Name} onChange={handleInputs}></input>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Mobile Number</label>
                            <input type="tel" className="form-control" name="Mobile_no" id="name2" aria-describedby="name2" value={user.Mobile_no} onChange={handleInputs}
                                pattern="[0-9]{10}" required></input>
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputEmail1" className="form-label">Email address</label>
                            <input type="email" className="form-control" name="Email" id="exampleInputEmail1" aria-describedby="emailHelp" value={user.name} onChange={handleInputs}></input>
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" className="form-control" name="password" id="exampleInputPassword1" value={user.password} onChange={handleInputs}></input>
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputPassword2" className="form-label">Confirm Password</label>
                            <input type="password" className="form-control" name="reEnterpassword" id="exampleInputPassword2" value={user.reEnterpassword} onChange={handleInputs}></input>
                        </div>
                        <button type="submit" className="btn btn-primary" onClick={postData}>Sign in</button>


                        <br></br>

                        <button class="login-with-google-btn" onClick={signInWithGoogle}>
                           Continue with Google
                        </button>
                        <br></br>
                    </form>

                    <NavLink to="/ParentLogin">Already Member ? Click to Login !</NavLink>
                </div>
            </div>
            {/* </div> */}
            {/* </div> */}
        </div>
    );
}
