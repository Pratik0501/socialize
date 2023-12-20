import React from "react";
import "./Auth.css";
import Logo from "../../img/img/logo.png";

const Auth = () => {
  return (
    <div className="Auth">
      <div className="a-left">
        <img src={Logo} />
        <div className="Webname">
          <h1>RIO Productions</h1>
          <h5>Explore the World of Web Development</h5>
        </div>
      </div>
      <SignUp />
    </div>
  );
};

function SignUp() {
  return (
    <div className="a-right">
      <form action="" className="infoForm">
        <h3>Sign Up</h3>
        <div>
          <input
            type="text"
            placeholder="First Name"
            className="infoInput"
            name="firstname"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="infoInput"
            name="lastname"
          />
        </div>

        <div>
          <input
            type="text"
            className="infoInput"
            name="username"
            placeholder="Username"
          />
        </div>
        <div>
          <input
            type="text"
            className="infoInput"
            name="password"
            placeholder="Password"
          />
          
          <input
            type="text"
            placeholder="Confirm Password"
            className="infoInput"
            name="confirmpassword"
          />
       
        </div>
        
        <div>
            <span>Already have an account? Login</span>
        </div>
        <button className="button subButton" type="submit">Signup</button>
      </form>
    </div>
  );
}

export default Auth;
