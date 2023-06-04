import React, { useContext } from "react";
import "./Checkout.css";
import { DataContext } from "../../../contexts/DataContext";
import { AddressContext } from "../../../contexts/AddressContext";
import { useNavigate } from "react-router-dom";

const CheckoutCard = () => {
  const { state, totalPrice, discount, dispatch } = useContext(DataContext);
  const { checkoutAddress } = useContext(AddressContext);
  const navigate = useNavigate();

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

          {state?.cartData?.map((ele) => (
            <div key={ele._id} className="checkout-flex">
              <p>{ele.name}</p>
              <p>{ele.qty}</p>
            </div>
          ))}
        </div>
        <hr />
        <h3>PRICE DETAILS</h3>
        <hr />
        <div className="container-margin">
          <div className="checkout-flex">
            <p>Price ({state.cartData.length} items)</p>
            <p>&#x20B9; {totalPrice}</p>
          </div>
          <div className="checkout-flex">
            <p>Discount</p>
            <p> &#x20B9; {totalPrice - discount} </p>
          </div>
          <div className="checkout-flex">
            <p>Delivery Charges</p>
            <p>FREE</p>
          </div>
          <div className="checkout-flex">
            <h3>Total Amount</h3>
            <h3>&#x20B9; {discount}</h3>
          </div>
        </div>
        <hr />
        <h3>DELIVER TO</h3>
        <hr />
        <div className="checkout-flex-column">
          <div className="checkout-flex-column start">
            <div className="address">
              {/* {checkoutAddress} */}
              {checkoutAddress}
            </div>
          </div>
          <button
            className="add-btn checkout"
            onClick={() => {
              navigate("/ordersummary");
              
            }}
          >
            Place order
          </button>
        </div>
      </div>
    </>
  );
};

export default CheckoutCard;
