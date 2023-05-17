import React from "react";
import "./Product.css";
import { FaStar } from "react-icons/fa";
const ProductDetails = () => {
  return (
    <div className="product-details-container">
      <div className="product-details">
        <img
          className="product-details-img"
          src="https://picsum.photos/500/500"
          alt=""
        />
        <div className="display-flex">
          <h2>Title of the product!</h2>
          <div className="price-info">
            <h1>&#x20B9; 7000</h1>
            <p className="cross-price">&#x20B9;200 </p> <span>(30%OFF)</span>
          </div>
          <div className="item-info">
            <p><b>Details:</b></p>
            <li>Bunch of 5 Roses</li>

            <p>
              Rating:{" "}
              <span className="star">
                2 <FaStar />
              </span>
            </p>
          </div>
          <div className="button-style">
            <button className="add-to-wishlist">Move to wishlist</button>
            <button className="add-btn">Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
