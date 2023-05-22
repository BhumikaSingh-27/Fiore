import React, { useContext } from "react";
import "./Navbar.css";
import { FaRegHeart } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { NavLink, useLocation } from "react-router-dom";
import { IoFlower } from "react-icons/io5";
import { IoPersonSharp } from "react-icons/io5";
import { DataContext } from "../../contexts/DataContext";

const Navbar = () => {
    const {userLogOut} = useContext(DataContext)
    const location= useLocation()

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
          <input className="nav-input" type="text" placeholder="Search" />
        </div>
      </div>

      <div className="navbar-nav">
        <NavLink className="not-a-link navlink" to="/login">
          <div className="login" onClick={()=>userLogOut(location)}>
            {" "}
            {localStorage.getItem("encodedToken") ? "Logout" : "Login"}{" "}
          </div>
        </NavLink>

        <NavLink className="navlink not-a-link" to="/wishlist">
          <div className="icon-style">
            <FaRegHeart />
          </div>
        </NavLink>

        <NavLink className="not-a-link navlink" to="/cart">
          <div className="icon-style">
            {" "}
            <FaShoppingCart />
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
