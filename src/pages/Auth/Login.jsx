import React from "react";
import "./Auth.css";
import { FaArrowAltCircleRight } from "react-icons/fa";

const Login = () => {
  return (
    <div>
      <div className="login-page">
        <div className="login-container">
          <h3>Sign In</h3>
          <div className="login-element">
            <label>Email:</label>{" "}
            <input
              class="input-element"
              type="text"
              placeholder="bhumika@gmail.com"
            />
            <label>Password:</label>
            <input
              class="input-element"
              type="password"
              placeholder="***********"
            />
            <button className="login-btn">Login</button>
          </div>
          <p>
            <a href="/root">Forgot password?</a>
          </p>
          <a className="link" href="/signup">
            Create a new account <FaArrowAltCircleRight />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
