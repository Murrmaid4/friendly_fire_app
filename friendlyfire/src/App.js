import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import React, { useState } from "react";
// import Signup from "./Pages/Signup/Signup";
import Login from "./Pages/Login/Login";

function App() {
  return (
    <Router>
      <Login />
    </Router>
  );
}

// to test out pages you can comment out the one thats displayed currently and add ur page, will work on the linking functionality in the backend phase

export default App;
