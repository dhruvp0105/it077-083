import logo from "./logo.svg";
import "./App.css";
import { ParentLogin } from "./MyComponent/ParentLogin";
import { Route, Routes } from "react-router";
import { ParentReg } from "./MyComponent/ParentReg";
import { BrowserRouter as Router, NavLink } from "react-router-dom";
import { Header } from "./MyComponent/Header";
import Home from "./MyComponent/Home";
import { Login } from "./MyComponent/Login";
import { HospitalLogin } from "./MyComponent/HospitalLogin";
import { HospitalReg } from "./MyComponent/HospitalReg";
function App() {
  return (
    <>
      <Router>
        <Header></Header>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>

          <Route exact path="/ParentLogin" element={<ParentLogin />}></Route>
          <Route
            exact
            path="/HospitalLogin"
            element={<HospitalLogin />}
          ></Route>
          <Route exact path="/HospitalReg" element={<HospitalReg />}></Route>
          <Route exact path="/ParentReg" element={<ParentReg />}></Route>
          <Route exact path="/Login" element={<Login />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
