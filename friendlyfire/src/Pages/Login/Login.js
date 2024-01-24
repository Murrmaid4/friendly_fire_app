// this page should include......

import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    // Add your form submission logic here
    // For example, you can validate the input fields, check if the passwords match, and then submit the form data

    console.log('Email:', email);
    console.log('Password:', password);
  

    // Reset the form fields
    setEmail('');
    setPassword('');
   
  };

  return (
    <div>
 <div>{/* div for logo */}</div>

        
    <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input type="email" value={email} onChange={handleEmailChange} required />
      </label>
      <br />
      <label>
        Password:
        <input type="password" value={password} onChange={handlePasswordChange} required />
      </label>
      <br />
      
      <button type="submit">Login</button>
    </form>
    <div>
        {/* Or divider div */}
      </div>
{/* this is the button that will be connecting to  */}
      <button type="submit">Login with Google</button>

    </div>
  );
};

export default Login;


// ....the friendlyfire logo



// ....email and password input fields










//...The login button (will be linked to matches (i think?) page)



//the divider with or in the middle





// Login with google button (just css on it for now, will attach it to google later)




// "Don't have an Accout? Sign Up " link to sign up page