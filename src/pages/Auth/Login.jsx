import React, { useContext, useEffect, useState } from "react";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import "./Auth.css";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { DataContext } from "../../contexts/DataContext";
// import { loginHandler } from "../../backend/controllers/AuthController";

const Login = () => {
  const [inputLogin, setInputLogin] = useState({ email: null, password: null });
  const [showPassword, setShowPassword] = useState(false);
  const { setInputSignUp, initialSignup } = useContext(DataContext);

  const navigate = useNavigate();
  const location = useLocation();

  const creds = {
    email: "bhumika@gmail.com",
    password: "bhumi27",
  };

  const tooglePassword = () => {
    setShowPassword((showPassword) => !showPassword);
  };

  const loginHandler = async (creds) => {
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        body: JSON.stringify(creds),
      });

      if (res.status !== 200) {
        throw res.statusText;
      }
      const { encodedToken } = await res.json();
      localStorage.setItem("encodedToken", encodedToken);

      if (encodedToken) {
        navigate(location?.state?.from?.pathname ?? "/");
      } else {
        navigate(location);
      }
    } catch (e) {
      console.log(e);
      toast.error(`An error ocuured, please try again`, {
        position: toast.POSITION.TOP_RIGHT,
        theme: "light",
        autoClose: 1000,
        className: "toast-align",
        // theme:"colored"
      });
    }
  };

  useEffect(() => {
    setInputSignUp(initialSignup);
  }, []);
  return (
    <div>
      <div className="login-page">
        <div className="login-container">
          <h3>Sign In</h3>
          <div className="login-element">
            <label>Email:</label>{" "}
            <input
              value={inputLogin.email}
              class="input-element"
              type="text"
              placeholder="Enter email"
              onChange={(e) =>
                setInputLogin({ ...inputLogin, email: e.target.value })
              }
              required
            />
            <label>Password:</label>
            <input
              value={inputLogin.password}
              class="input-element"
              type={showPassword ? "text" : "password"}
              placeholder="***********"
              onChange={(e) =>
                setInputLogin({ ...inputLogin, password: e.target.value })
              }
              required
            />
            <div className="password-icon login-icon" onClick={tooglePassword}>
              {showPassword ? <FaEye /> : <FaEyeSlash />}
            </div>
            <button
              className="login-btn"
              onClick={() => loginHandler(inputLogin)}
            >
              Login
            </button>
            <button
              className="login-btn secondary"
              onClick={() => {
                setInputLogin(creds);
                loginHandler(creds);
              }}
            >
              Login as a Guest
            </button>
          </div>

          {/* <p>
            <a href="/root">Forgot password?</a>
          </p> */}
          <NavLink className="link" to="/signup">
            Create a new account <FaArrowAltCircleRight />
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Login;
