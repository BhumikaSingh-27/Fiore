import React, { useContext } from "react";
import "./Category.css";
import { NavLink } from "react-router-dom";
import { DataContext } from "../../../contexts/DataContext";

const Category = ({ _id, name, src }) => {
  const { dispatch } = useContext(DataContext);

  const selectByCategoty = () => {
    if (name.includes("Roses")) {
      dispatch({ type: "SELECT_ROSE", payload: name });
    } else if (name.includes("Lilies")) {
      dispatch({ type: "SELECT_LILIES", payload: name });
    } else {
      dispatch({ type: "SELECT_ORCHIDS", payload: name });
    }
  };
  return (
    <NavLink className="not-a-link product-link" to="/product">
      <div key={_id} onClick={selectByCategoty}>
        <div className="category-item-container">
          <img className="category-img" src={src} alt="" />
          <h3>{name}</h3>
        </div>
      </div>
    </NavLink>
  );
};

export default Category;
