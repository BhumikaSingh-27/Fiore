import React, { useContext, useState } from "react";
import "./Auth.css";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import { DataContext } from "../../contexts/DataContext";

const Signup = () => {
  const { inputSignUp, setInputSignUp } = useContext(DataContext);
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const tooglePassword = () => {
    setShowPassword((showPassword) => !showPassword);
  };

  const creds = {
    firstName: inputSignUp.firstName,
    lastName: inputSignUp.lastName,
    email: inputSignUp.email,
    password: inputSignUp.password,
  };

  const signupHandler = async () => {
    try {
      const response = await fetch("/api/auth/signup", {
        method: "POST",
        body: JSON.stringify(creds),
      });

      const data = await response.json();
      const { encodedToken } = data;
      localStorage.setItem("encodedToken", encodedToken);
      navigate(encodedToken && "/profile");
    } catch (e) {
      console.log(e);
    }
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
              onChange={(e) =>
                setInputSignUp({ ...inputSignUp, firstName: e.target.value })
              }
            />
            <label>Last Name:</label>{" "}
            <input
              className="input-element"
              type="text"
              placeholder="singh"
              onChange={(e) =>
                setInputSignUp({ ...inputSignUp, lastName: e.target.value })
              }
            />
            <label>Email:</label>{" "}
            <input
              className="input-element"
              type="text"
              placeholder="bhumika@gmail.com"
              onChange={(e) =>
                setInputSignUp({ ...inputSignUp, email: e.target.value })
              }
            />
            <label>Password:</label>
            <input
              class="input-element"
              type="password"
              placeholder="***********"
              onChange={(e) =>
                setInputSignUp({ ...inputSignUp, password: e.target.value })
              }
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
            <button className="login-btn" onClick={signupHandler}>
              Create New Account
            </button>
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
