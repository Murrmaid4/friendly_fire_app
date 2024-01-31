import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import React, { useState } from "react";

// import Signup from './pages/Signup/Signup';
// import Login from "./Pages/Login/Login";
import Registration from "./Pages/Registration/Registration";


function App() {
  return (
    <Router>
<<<<<<< HEAD
      {/* <Signup/> */}
      <Registration />
=======
      {/*<Signup/>*/}
      <Login />
>>>>>>> bdc362f141c307325964c09f3bcea88413788f96
    </Router>
  );
}

// to test out pages you can comment out the one thats displayed currently and add ur page, will work on the linking functionality in the backend phase

export default App;
