import React from "react";
import "./checkout.css";

const CheckoutCard = () => {
  return (
    <>
      <div className="checkout-container">
        <hr />
        <h3>ORDER DETAILS</h3>
        <hr />
        <div className="container-margin">
            <div className="checkout-header">
          <div className="checkout-flex">
            <h3>Item</h3>
            <h3>Qty</h3>
          </div>
          </div>

          {/* this will vary, we need to apply map and return this */}
          <div className="checkout-flex">
            <p>Book Name</p>
            <p>1</p>
          </div>
          <div className="checkout-flex">
            <p>Book Name</p>
            <p>1</p>
          </div>
          {/*this block  */}
        </div>
        <hr />
        <h3>PRICE DETAILS</h3>
        <hr />
        <div className="container-margin">
          <div className="checkout-flex">
            <p>Price(2items)</p>
            <p>&#x20B9; 400</p>
          </div>
          <div className="checkout-flex">
            <p>Discount</p>
            <p> &#x20B9; 500 </p>
          </div>
          <div className="checkout-flex">
            <p>Delivery Charges</p>
            <p>FREE</p>
          </div>
          <div className="checkout-flex">
            <h3>Total Amount</h3>
            <h3>&#x20B9; 900</h3>
          </div>
        </div>
        <hr />
        <h3>DELIVER TO</h3>
        <hr />
        <div className="checkout-flex-column">
          <div className="checkout-flex-column start">
            <div>UserName</div>
            <div className="address">address- savita sandan</div>
          </div>
          <button className="add-btn checkout">Place order</button>
        </div>
      </div>
    </>
  );
};

export default CheckoutCard;
