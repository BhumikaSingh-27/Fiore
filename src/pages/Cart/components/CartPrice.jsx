import React, { useContext } from "react";
import "../Cart.css";
import "../../Product/components/Filter.css";
import { NavLink } from "react-router-dom";
import { DataContext } from "../../../contexts/DataContext";

const CartPrice = () => {
  const { state, totalPrice, discount } = useContext(DataContext);

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
            <div>-&#x20B9;{totalPrice - discount}</div>
          </div>
          <div className="cart-price-flex">
            <div>Delivery Charges</div>
            <div>FREE</div>
          </div>
        </div>
        <hr />
        <div className="cart-price-flex">
          <h3>TOTAL AMOUNT</h3>
          <h3>&#x20B9;{discount}</h3>
        </div>
        <hr />
        <span className="cart-price-message">
          You will save &#x20B9;{totalPrice - discount} on this order
        </span>
        <NavLink to="/checkout">
          <button className="add-btn">Checkout</button>
        </NavLink>
      </div>
    </div>
  );
};

export default CartPrice;
