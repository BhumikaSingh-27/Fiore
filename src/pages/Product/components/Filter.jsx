import React from "react";
import "./Filter.css";

const Filter = () => {
  return (
    <div>
      <div className="filter-main-body">
        <div className="filter-component">
          <p>
            <b>Filters</b>
          </p>
          <p style={{ textDecoration: "underline" }}>Clear</p>
        </div>
        <div className="filter-price">
          <h4>Price</h4>
          <input class type="range" min="0" max="100" />
        </div>
        <div className="filter-category">
          <h4>Category</h4>
          <div className="filter-category-name">
            <label>
              <input type="checkbox" value="" />
              <span>Men</span>
            </label>
            <label>
              <input type="checkbox" value="" />
              <span>Women</span>
            </label>
            <label>
              <input type="checkbox" value="" />
              <span>Kids</span>
            </label>
          </div>
        </div>
        <div className="filter-category">
          <h4>Ratings</h4>
          <div className="filter-category-name">
            <label>
              <input type="radio" name="ratings" />
              <span>4 stars and above</span>
            </label>
            <label>
              <input type="radio" name="ratings" />
              <span>3 stars and above</span>
            </label>
            <label>
              <input type="radio" name="ratings" />
              <span>2 stars and above</span>
            </label>
            <label>
              <input type="radio" name="ratings" />
              <span>1 stars and above</span>
            </label>
          </div>
        </div>
        <div className="filter-category">
          <h4>Sort by</h4>
          <div className="filter-category-name">
            <label>
              <input type="radio" name="price" />

              <span> Price - Low to High</span>
            </label>
            <label>
              <input type="radio" name="price" />
              <span>Price - High to Low</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
