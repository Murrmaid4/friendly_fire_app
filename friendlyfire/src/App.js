
import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import React, { useState } from "react";
// import Signup from './pages/Signup/Signup';
import Login from './pages/Login/Login';

function App() {
  return (
    <Router>
    {/* <Signup/> */}
    <Login/>
   </Router>
  );
}

export default App;
