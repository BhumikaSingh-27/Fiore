import React, { useContext } from "react";
import "./Checkout.css";
import { AddressContext } from "../../../contexts/AddressContext";

const CheckoutAddress = ({ add }) => {
  return (
    <div className="address-container">
      <label>
        {" "}
        <div className="address-bar">
          <input type="radio" name="address" />

          <div className="checkout-flex-column start">
            <div>
              <b>{add.name}</b>
            </div>
            <div className="address">
              {add.houseNo},{add.city},{add.state},{add.country}.<br />
              Pincode: {add.postalCode}. mobile:{add.mobile}
            </div>
          </div>
        </div>
      </label>
    </div>
  );
};

export default CheckoutAddress;
