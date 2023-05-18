import React from "react";
import "./Product.css";
import "./components/Filter.css";
import "../Cart/Cart.css";

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
            <p>
              <b>Details:</b>
            </p>
            <li>Bunch of 5 Roses</li>
            <li>Red Vase</li>
            <p>
              <b>Rating:</b>
              {" "}
              <span className="star">
                2 <FaStar />
              </span>
            </p>
          </div>
          <div>
            <ul className="ul-align-icons">
                <li className="space-icons" >
                    <img src="https://imgcdn.floweraura.com/ssr-build//static/media/fast_delivery.1bb49c82.svg" alt="" />
                 <p>OnTime Delivery</p>   
                </li>
                <li className="space-icons" >
                    <img src="https://res.cloudinary.com/dgoldjr3g/image/upload/v1684391519/payment_ihehn0.svg" alt="" />
                    100% Safe & Secure Payments
                </li>
                <li className="space-icons" >
                    <img src="https://res.cloudinary.com/dgoldjr3g/image/upload/v1684391600/smile.c7a70acc_j9a3bi.svg" alt="" />
                    7 Million Smiles Delivered
                </li>
            </ul>
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
