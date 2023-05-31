import React, { useContext, useEffect } from "react";
import "./Navbar.css";
import { FaRegHeart } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { IoFlower } from "react-icons/io5";
import { IoPersonSharp } from "react-icons/io5";
import { DataContext } from "../../contexts/DataContext";

const Navbar = () => {
  const { userLogOut, state, dispatch } = useContext(DataContext);
  const location = useLocation();
  const navigate = useNavigate();

  const cartCount = state?.cartData.length;
  const wishCount = state?.wishlistData.length;

  const searchText = (value) => {
    dispatch({ type: "SEARCH_TEXT", payload: value });
    navigate("/product");
  };

  useEffect(() => {
    dispatch({ type: "RESET_ALL" });
  }, []);

  return (
    <div className="navbar">
      <NavLink className="not-a-link" to="/">
        {" "}
        <h1 className="nav-header">
          Fiore
          <IoFlower />
        </h1>{" "}
      </NavLink>
      <div className="search-container">
        <div>
          <em></em>
          <input
            className="nav-input"
            type="text"
            placeholder="Search"
            value={state.searchText}
            onChange={(e) => searchText(e.target.value)}
          />
        </div>
      </div>

      <div className="navbar-nav">
        <NavLink className="not-a-link navlink" to="/login">
          <div className="login" onClick={() => userLogOut(location)}>
            {" "}
            {localStorage.getItem("encodedToken") ? "Logout" : "Login"}{" "}
          </div>
        </NavLink>

        <NavLink className="navlink not-a-link" to="/wishlist">
          <div className="nav-counter-container">
            <div className="icon-style">
              <FaRegHeart />{" "}
              <span
                className="navbar-counter"
                style={{
                  display: wishCount && localStorage.getItem("encodedToken") ? "block" : "none",
                }}
              >
                {wishCount ? wishCount : " "}
              </span>
            </div>
          </div>
        </NavLink>

        <NavLink className="not-a-link navlink" to="/cart">
          <div className="nav-counter-container">
            <div className="icon-style">
              {" "}
              <FaShoppingCart />{" "}
              <span
                className="navbar-counter"
                style={{
                  display: cartCount && localStorage.getItem("encodedToken") ? "block" : "none",
                }}
              >
                {cartCount ? cartCount : " "}
              </span>
            </div>
          </div>
        </NavLink>

        <NavLink className="not-a-link navlink" to="/profile">
          <div className="icon-style">
            {" "}
            <IoPersonSharp />
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
