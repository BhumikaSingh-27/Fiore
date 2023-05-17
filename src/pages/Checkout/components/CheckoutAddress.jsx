import React from "react";

const CheckoutAddress = () => {
  return (
    <div className="address-container">
      <label>
        {" "}
        <div className="address-bar">
        <input type="radio" name="address" />
        <div className="checkout-flex-column start">
          <div>UserName</div>
          <div className="address">address- savita sandanaddress- savita sandan
          road 18/4a</div>
        </div>{" "}
        </div>
      </label>
    </div>
  );
};

export default CheckoutAddress;
