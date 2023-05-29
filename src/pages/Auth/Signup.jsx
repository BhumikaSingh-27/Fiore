import React, { useContext, useState } from "react";
import "./Auth.css";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import { DataContext } from "../../contexts/DataContext";
import { toast } from "react-toastify";

const Signup = () => {
  const { inputSignUp, setInputSignUp } = useContext(DataContext);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const navigate = useNavigate();

  const tooglePassword = (e) => {
    setShowPassword((showPassword) => !showPassword);
    e.target.type = "text";
  };
  const toogleConfirmPassword = () => {
    setShowConfirmPassword((showConfirmPassword) => !showConfirmPassword);
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

      if (response.status !== 200) {
        throw response.statusText;
      }

      const data = await response.json();
      const { encodedToken } = data;
      localStorage.setItem("encodedToken", encodedToken);
      navigate(encodedToken && "/profile");
    } catch (e) {
      console.log(e);
      toast.error("An error occured! Please enter all the fields", {
        position: toast.POSITION.TOP_RIGHT,
        theme: "light",
        autoClose: 1000,
        className: "toast-align",
        // theme:"colored"
      });
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
              placeholder="Enter first name"
              onChange={(e) =>
                setInputSignUp({ ...inputSignUp, firstName: e.target.value })
              }
            />
            <label>Last Name:</label>{" "}
            <input
              className="input-element"
              type="text"
              placeholder="Enter last name"
              onChange={(e) =>
                setInputSignUp({ ...inputSignUp, lastName: e.target.value })
              }
            />
            <label>Email:</label>{" "}
            <input
              className="input-element"
              type="text"
              placeholder="Enter email"
              onChange={(e) =>
                setInputSignUp({ ...inputSignUp, email: e.target.value })
              }
            />
            <label>Password:</label>
            <input
              class="input-element"
              type={showPassword ? "text" : "password"}
              placeholder="***********"
              onChange={(e) =>
                setInputSignUp({ ...inputSignUp, password: e.target.value })
              }
            />
            <div className="password-icon" onClick={tooglePassword}>
              {showPassword ? <FaEye /> : <FaEyeSlash />}
            </div>
            <label>Confirm Password:</label>
            <input
              class="input-element"
              type={showConfirmPassword ? "text" : "password"}
              placeholder="***********"
            />
            <div className="password-icon" onClick={toogleConfirmPassword}>
              {showConfirmPassword ? <FaEye /> : <FaEyeSlash />}
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
