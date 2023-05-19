import React from "react";
import "./Category.css";

const Category = ({_id,name,src}) => {
  return (
    <div key={_id}>
      <div className="category-item-container">
        <img
          className="category-img"
          src={src}
          alt=""
        />
        <h3>{name}</h3>
      </div>
    </div>
  );
};

export default Category;
