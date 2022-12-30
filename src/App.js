import logo from './logo.svg';
import './App.css';
import  {ParentLogin}  from './MyComponent/ParentLogin';
import { Route, Routes } from 'react-router';
import { ParentReg } from './MyComponent/ParentReg';
import { BrowserRouter as Router, NavLink } from 'react-router-dom';
import { Header } from './MyComponent/Header';
import Home from './MyComponent/Home';
/* import { ParentReg } from './MyComponent/ParentReg'; */
function App() {
  return (
      <>
          <Router>
          <Header></Header>

            <Routes>
            
            <Route exact path='/' element={<Home/>}></Route>

            <Route exact path='/ParentLogin' element={<ParentLogin/>}></Route>
            <Route exact path='/ParentReg' element={<ParentReg/>}></Route>

            </Routes>
          </Router>
      </>
  )
}

export default App;
