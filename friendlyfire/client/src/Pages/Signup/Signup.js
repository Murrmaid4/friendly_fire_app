import React from "react";
import Logo from '../../assets/signuplogo.svg';
import {useState} from 'react'
import "./Signup.css";


const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  // this is how we'll grab email and password information 

  const handleEmailChange = (e) => {
    setEmail(e.target.value);

  // here's where email will be stored 
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();}

    return (
      <div >
        <div className="logo-container">{/* div for logo */}
          <img src={Logo} alt="friendlyfire app logo" className="logo"/>
        </div>
        <h1 className="signup">Sign Up</h1>
        
        <div>
          <form>
            <label>
              Email:
              <input
                type="email"
                placeholder="Enter-E-mail"
                value={email}
                onChange={handleEmailChange}
                required
              />
            </label>
            <br />
            <label>
              Password:
              <input
                type="password"
                placeholder="Enter Password"
                value={password}
                onChange={handlePasswordChange}
                required
              />
            </label>
            <br />
            <label>
              Confirm Password:
              <input
                type="password"
                placeholder="Re-enter Password"
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
                required
              />
            </label>
            <br />
            <button id="signup" type="submit" className="signup-text">Sign Up</button>
          </form>
        </div>

        <div>
          {/* Or divider div (check figma, may be able to export css from there for this) */}
          <p className="or">or</p>
        </div>
        {/* this is the button that will be connecting to google api, just css on button for now */}
        <button type="submit" className="google"> Sign up with Google</button>
         <div className="account-question">
         <p className="question">Already a Member?</p>
         <a href="github.com/murrmaid4" className="login">Login</a></div>
         {/* will have this link to login page eventually(in back end phase) */}
   

      </div>
    );
  };


export default Signup


