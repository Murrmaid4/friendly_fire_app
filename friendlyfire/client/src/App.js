import "./App.css";
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
// import React, { useState } from "react";
import Signup from './Pages/Signup/Signup';
import Account from './Pages/Account/Account';
import Registration from "./Pages/Registration/Registration";
import Matches from "./Pages/Matches/Matches";
import Settings from "./Pages/Settings/Settings";


function App() {
  return (
    <Router>
   <Routes>
    <Route path="/" element={<Signup/> }/>
    <Route path="/account" element={<Account/> }/>
    <Route path="/signup" element={<Registration/> }/>
    <Route path="/matches" element={<Matches/> }/>
    <Route path="/settings" element={<Settings/> }/>
   </Routes>
    </Router>
  );
}

// to test out pages you can comment out the one thats displayed currently and add ur page, will work on the linking functionality in the backend phase

export default App;
