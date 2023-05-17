import React from "react";
import "./components/checkout.css";
import CheckoutCard from "./components/CheckoutCard";
import CheckoutAddress from "./components/CheckoutAddress";

const Checkout = () => {
  return (
    <div className="checkout-body">
      <h2>Checkout</h2>
      <div className="main-checkout-body">
        <div className="show-checkout-container">
          <div className="checkout-address-container">
            <CheckoutAddress />
            <CheckoutAddress />
          </div>
          <CheckoutCard />
        </div>
      </div>
    </div>
  );
};

export default Checkout;
