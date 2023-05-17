import React from "react";
import "./Wishlist.css";
import "../../Cart/Cart.css";

const WishlistCart = () => {
  return (
    <div>
      <div className="cart-product-card">
        <img src="https://picsum.photos/500/500" alt="" />
        <div className="cart-product-details">
          <div className="cart-product-title">
            {" "}
            <h3 className="title">TITLE of product</h3>
            <div className="display-flex">
              <div className="price-info">
                <h1>&#x20B9; 7000</h1>
                <p className="cross-price">&#x20B9;200 </p>{" "}
                <span>(30%OFF)</span>
              </div>
              <div>
                Quantity: <button className="quantity-change-btn">-</button> 1{" "}
                <button className="quantity-change-btn">+</button>
              </div>
            </div>
          </div>

          <button className="add-btn remove-btn"> Remove from Wishlist</button>
          <button className="add-to-wishlist">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default WishlistCart;
