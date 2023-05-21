import React, { useContext } from "react";
import "../Cart.css";
import "../../Product/components/Filter.css";
import { NavLink } from "react-router-dom";
import { DataContext } from "../../../contexts/DataContext";

const CartPrice = () => {
  const { state } = useContext(DataContext);
  const totalPrice = state.cartData.reduce((acc, cur) => cur.price * cur.qty + acc, 0);
  const discount = state.cartData.reduce((acc, cur) => cur.discount + acc, 0);

  return (
    <div>
      <div className="cart-price-details">
        <div className="cart-hr-title">
          <hr />
          <h3 className="cart-price-title">Price Details</h3>
          <hr />
        </div>
        <div className="cart-price">
          <div className="cart-price-flex">
            <div>Price ({state.cartData.length} items)</div>
            <div>&#x20B9;{totalPrice}</div>
          </div>
          <div className="cart-price-flex">
            <div>Discount</div>
            <div>&#x20B9;{discount}</div>
          </div>
          <div className="cart-price-flex">
            <div>Delivery Charges</div>
            <div>&#x20B9;200</div>
          </div>
        </div>
        <hr />
        <div className="cart-price-flex">
          <h3>TOTAL AMOUNT</h3>
          <h3>&#x20B9;{totalPrice+discount+200}</h3>
        </div>
        <hr />
        <span className="cart-price-message">
          You will save rs {totalPrice-discount} on this order
        </span>
        <NavLink to="/checkout">
          <button className="add-btn">Checkout</button>
        </NavLink>
      </div>
    </div>
  );
};

export default CartPrice;
