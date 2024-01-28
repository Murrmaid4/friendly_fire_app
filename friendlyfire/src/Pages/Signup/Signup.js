// import React, { useState } from "react";


const Signup = () => {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [confirmPassword, setConfirmPassword] = useState("");

  // const handleEmailChange = (e) => {
  //   setEmail(e.target.value);
  // };

  // const handlePasswordChange = (e) => {
  //   setPassword(e.target.value);
  // };

  // const handleConfirmPasswordChange = (e) => {
  //   setConfirmPassword(e.target.value);
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();}

    return (
      <div>
        <div>{/* div for logo */}</div>

        <div>
          <form >
            <label>
              Email:
              <input
                type="email"
                // value={email}
                // onChange={handleEmailChange}
                required
              />
            </label>
            <br />
            <label>
              Password:
              <input
                type="password"
                // value={password}
                // onChange={handlePasswordChange}
                required
              />
            </label>
            <br />
            <label>
              Confirm Password:
              <input
                type="password"
                // value={confirmPassword}
                // onChange={handleConfirmPasswordChange}
                required
              />
            </label>
            <br />
            <button type="submit">Sign Up</button>
          </form>
        </div>

      <div>
        {/* Or divider div */}
      </div>
{/* this is the button that will be connecting to  */}
      <button type="submit"> Sign up with Google</button>

      </div>
    );
  };


export default Signup





//... a sign up button (will be linked to registration page)

//the divider with or in the middle

// Sign up with google button (just css on it for now, will attach it to google later)
