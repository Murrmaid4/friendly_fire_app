import React, { useState } from "react";
import Logo from "../../assets/StackedLogo.svg";
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
    <div>
      <h1>Login</h1>
      <div>
        {/* div for logo */}
        <img src={Logo} alt="friendlyfire app logo" />
      </div>

      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input
            type="email"
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
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </label>
        <br />

        <button id="login" type="submit">
          Login
        </button>
      </form>
      <div>
        {/* Or divider div (check figma, may be able to export css from there for this) */}
        <p>or</p>
      </div>
      {/* this is the button that will be connecting to  */}
      <button type="submit">Login with Google</button>
      <div>
        <a href="github.com/murrmaid4">New to FriendlyFire?</a>
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
