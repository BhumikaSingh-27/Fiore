import React from "react";
import CartPrice from "./components/CartPrice";
import CartProduct from "./components/CartProduct";

import "./Cart.css";
const Cart = () => {
  return (
    <div>
      <div className="cart-header">
        <h1>My Cart (0)</h1>
      </div>

      <div className="cart-main">
        <div className="cart-list">
          <CartProduct />
          <CartProduct />
        </div>
        <CartPrice />
      </div>
    </div>
  );
};

export default Cart;
