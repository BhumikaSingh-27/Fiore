import React, { useState } from "react";
import "./Auth.css";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);

  const tooglePassword = () => {
    setShowPassword((showPassword) => !showPassword);
  };

  return (
    <div>
      <div className="sign-page">
        <div className="sign-up">
          <h2>Sign Up</h2>
          <div className="login-element">
            <label>First Name:</label>{" "}
            <input
              className="input-element"
              type="text"
              placeholder="Mr. ABC"
            />
            <label>Last Name:</label>{" "}
            <input
              className="input-element"
              type="text"
              placeholder="Mr. ABC"
            />
            <label>Email:</label>{" "}
            <input
              className="input-element"
              type="text"
              placeholder="bhumika@gmail.com"
            />
            <label>Password:</label>
            <input
              class="input-element"
              type="password"
              placeholder="***********"
            />
            <label>Confirm Password:</label>
            <input
              class="input-element"
              type={showPassword ? "text" : "password"}
              placeholder="***********"
            />
            <div className="password-icon" onClick={tooglePassword}>
              {showPassword ? <FaEye /> : <FaEyeSlash />}
            </div>
            <button className="login-btn">Create New Account</button>
          </div>
          <NavLink className="link" to="/login">
            Already have an account <FaArrowAltCircleRight />
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Signup;
