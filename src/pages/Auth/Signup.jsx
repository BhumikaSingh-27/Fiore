import React, { useContext, useState } from "react";
import "./Auth.css";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import { DataContext } from "../../contexts/DataContext";
import { toast } from "react-toastify";
import { AddressContext } from "../../contexts/AddressContext";

const Signup = () => {
  const { inputSignUp, setInputSignUp } = useContext(DataContext);
  const { setUserInfo } = useContext(AddressContext);
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
    email: inputSignUp.email,
    password: inputSignUp.password,
    confirmPassword: inputSignUp.confirmPassword,
    firstName: inputSignUp.firstName,
    lastName: inputSignUp.lastName,
  };

  const validateFields = () => {
    if (
      creds.email &&
      creds.password &&
      creds.confirmPassword &&
      creds.firstName &&
      creds.lastName
    ) {
      if (creds.password !== creds.confirmPassword) {
        toast.error(
          "Password doenot match, please enter the correct password",
          {
            position: toast.POSITION.TOP_RIGHT,
            theme: "light",
            autoClose: 1000,
            className: "toast-align",
            // theme:"colored"
          }
        );
        return false;
      }
      if (!creds.email.includes("@")) {
        toast.error("Please enter a valid email id", {
          position: toast.POSITION.TOP_RIGHT,
          theme: "light",
          autoClose: 1000,
          className: "toast-align",
          // theme:"colored"
        });
        return false;
      }
      return true;
    } else {
      toast.error("Please fill all the required fields", {
        position: toast.POSITION.TOP_RIGHT,
        theme: "light",
        autoClose: 1000,
        className: "toast-align",
        // theme:"colored"
      });
      return false;
    }
  };
  const signupHandler = async () => {
    const check = validateFields();
    if (check) {
      try {
        const response = await fetch("/api/auth/signup", {
          method: "POST",
          body: JSON.stringify(creds),
        });

        if (response.status !== 201) {
          throw response.statusText;
        }

        const data = await response.json();
        const { createdUser, encodedToken } = data;
        setUserInfo(createdUser);
        localStorage.setItem("encodedToken", encodedToken);
        navigate(encodedToken && "/profile");
      } catch (e) {
        console.log(e);
        toast.error("An error occured! Please try again", {
          position: toast.POSITION.TOP_RIGHT,
          theme: "light",
          autoClose: 1000,
          className: "toast-align",
          // theme:"colored"
        });
      }
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
              onChange={(e) =>
                setInputSignUp({
                  ...inputSignUp,
                  confirmPassword: e.target.value,
                })
              }
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
