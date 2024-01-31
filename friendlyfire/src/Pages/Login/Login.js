import React, { useState } from "react";
import Logo from "../../assets/loginlogo.svg";
import Google from "../../assets/googlelogo.svg";
import background from "../../assets/background.svg";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Email:", email);
    console.log("Password:", password);

    // Reset the form fields
    setEmail("");
    setPassword("");
  };

  return (
    <div style={{ backgroundImage: `url(${background})`, backgroundRepeat: "repeat", width: '100%'}}>
      <div className="logo-container">
        {/* div for logo */}
        <img src={Logo} alt="friendlyfire app logo" className="logo" />
      </div>

      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input
            type="email"
            placeholder="Enter E-mail"
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

        <button id="login" type="submit" className="login-text">
          Login
        </button>
      </form>
      <div>
        {/* Or divider div (check figma, may be able to export css from there for this) */}
        <p className="or">or</p>
      </div>
      {/* this is the button that will be connecting to  */}
      <div className="google-container">
        <button type="submit" className="google">Login with Google</button>
        {/*<img src={Google} alt="google logo" className="google-logo" />*/}
      </div>
      <div className="account-question">
        <p className="question">Don't have an account?</p>
        <a href="github.com/murrmaid4" className="signup">Sign up</a>
      </div>
      {/* will have this link to sign in page eventually(in back end phase) */}
    </div>
  );
};

export default Login;

//...The login button (will be linked to matches (i think?) page)

//the divider with or in the middle

// Login with google button (just css on it for now, will attach it to google later)

// "Don't have an Accout? Sign Up " link to sign up page
