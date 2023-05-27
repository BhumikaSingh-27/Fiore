import React, { useContext, useEffect, useState } from "react";
import "./Checkout.css";
import { AddressContext } from "../../../contexts/AddressContext";

const CheckoutAddress = ({ add }) => {
  const { setCheckoutAddress } = useContext(AddressContext);
  // const [radio, setRadio] = useState(false)

  const setAddress = (e) => {
    const { id, ...rest } = add;
    const addArray = Object.values(rest);
    console.log(addArray);
    setCheckoutAddress(addArray.join(" "));
    // e.target.checked=true
  };

  // useEffect(() => {
  //   setAddress();
  // }, []);

  return (
    <div className="address-container">
      <label>
        {" "}
        <div className="address-bar">
          <input
            type="radio"
            name="address"
            value={add.id}
            onChange={() => setAddress()}
            
          />

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
