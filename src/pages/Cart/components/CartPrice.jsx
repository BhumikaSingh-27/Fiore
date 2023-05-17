import React from "react";
import "../Cart.css";
import "../../Product/components/Filter.css";

const CartPrice = () => {
  return (
    <div>
      <div className="cart-price-details">
        <div className="cart-hr-title" >
          <hr />
          <h3 className="cart-price-title">Price Details</h3>
          <hr />
        </div>
        <div className="cart-price">
          <div className="cart-price-flex">
            <div>Price (2 items)</div>
            <div>&#x20B9;200</div>
          </div>
          <div className="cart-price-flex">
            <div>Discount</div>
            <div>&#x20B9;200</div>
          </div>
          <div className="cart-price-flex">
            <div>Delivery Charges</div>
            <div>&#x20B9;200</div>
          </div>
        </div>
        <hr />
        <div className="cart-price-flex">
          <h3>TOTAL AMOUNT</h3>
          <h3>&#x20B9;200</h3>
        </div>
        <hr />
        <span className="cart-price-message">
          You will save rs 200 on this order
        </span>
        <button className="add-btn">Checkout</button>
      </div>
    </div>
  );
};

export default CartPrice;
