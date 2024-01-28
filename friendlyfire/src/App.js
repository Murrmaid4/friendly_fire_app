
import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import React, { useState } from "react";
import Signup from './pages/Signup/Signup';

function App() {
  return (
    <Router>
    <Signup/>
   </Router>
  );
}

export default App;
