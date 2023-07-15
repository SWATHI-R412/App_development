import React, { StrictMode } from 'react'
//import './App.css'

// import Home from './portfolio/Home';
// import Aboutus from './portfolio/AboutUs';
// import Header from './portfolio/Header';
// import ParentCorner from './portfolio/ParentCorner';
// import Academics from './portfolio/Academics';
// import Contact from './portfolio/Contact';

import Home from './project/Home';
import Login from './project/Login';
import SignUp from './project/SignUp';
import MainPage from './project/MainPage';

import{BrowserRouter, BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom';
function App(){
  return(
    <BrowserRouter>
    {/* //<Header/> */}
    
      
<Routes>

  <Route path="/Home" element={<Home/>}/>
  <Route path="/Login" element={<Login/>}/>
  <Route path="/SignUp" element={<SignUp/>}/>
  <Route path="/MainPage" element={<MainPage/>}/>
  {/* <Route path="/Aboutus" element={<Aboutus/>}/>
  <Route path="/ParentCorner" element={<ParentCorner/>}/>
  <Route path="/Academics" element={<Academics/>}/>
  <Route path="/Contact" element={<Contact/>}/> */}
   
</Routes>
</BrowserRouter>
  );
}
export default App;

