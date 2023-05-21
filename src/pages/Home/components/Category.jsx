import React, { useContext } from "react";
import "./Category.css";
import { NavLink } from "react-router-dom";
import { DataContext } from "../../../contexts/DataContext";

const Category = ({ _id, name, src }) => {
  const { dispatch } = useContext(DataContext);
  return (
    <NavLink className="not-a-link product-link" to="/product">
      <div
        key={_id}
        onClick={() =>
          dispatch({ type: "SELECT_DATABY_CATEGORY", payload: name })
        }
      >
        <div className="category-item-container">
          <img className="category-img" src={src} alt="" />
          <h3>{name}</h3>
        </div>
      </div>
    </NavLink>
  );
};

export default Category;
