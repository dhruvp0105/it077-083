import logo from "./logo.svg";
import "./App.css";
import { ParentLogin } from "./MyComponent/ParentLogin";
import { Route, Routes } from "react-router-dom";
import { ParentReg } from "./MyComponent/ParentReg";
import { BrowserRouter as Router, NavLink } from "react-router-dom";
import { Header } from "./MyComponent/Header";
import Home from "./MyComponent/Home";
import { Login } from "./MyComponent/Login";
import { HospitalLogin } from "./MyComponent/HospitalLogin";
import { HospitalReg } from "./MyComponent/HospitalReg";
import { ParentInfo } from "./MyComponent/ParentInfo";
import { ChildInfo } from "./MyComponent/ChildInfo";
import { useState } from "react";
import { Contact } from "./MyComponent/Contact";

function App() {
  const [user, setLoginUser] = useState({})
  return (
    <div>
      <Router>
        <Header/>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>

          <Route exact path="/ParentLogin" element={<ParentLogin />}></Route>
          <Route exact path="/HospitalLogin" element={<HospitalLogin />}></Route>
          <Route exact path="/HospitalReg" element={<HospitalReg />}></Route>
          <Route exact path="/ParentReg" element={<ParentReg />}></Route>
          <Route exact path="/Login" element={<Login />}></Route>
          <Route exact path="/parentinfo" element={user && user._id ? <ParentLogin /> : <ParentInfo />}>
            {/* {(props)=>user && user._id ? <ParentInfo /> : <ParentLogin />} */}
            {/* {(props)=><ParentInfo />} */}
          </Route>
          <Route exact path="/Contact" element={<Contact/>}></Route>
          <Route exact path="/childinfo" element={<ChildInfo />}></Route>

        </Routes>
      </Router>
    </div>
  );
}

export default App;

