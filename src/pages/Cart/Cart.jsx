import React, { useContext, useReducer } from "react";
import CartPrice from "./components/CartPrice";
import CartProduct from "./components/CartProduct";
import "./Cart.css";
import { DataContext } from "../../contexts/DataContext";
import Navbar from "../../components/Navbar/Navbar";

const Cart = () => {
  const { state } = useContext(DataContext);

  return (
    <div>
{/* <Navbar /> */}
    {state.cartData.length ? <>
      <div className="cart-header">
        <h1>My Cart ({state.cartData.length})</h1>
      </div>

      <div className="cart-main">
        <div className="cart-list">
          {state?.cartData.map((item) => (
            <div>
              <CartProduct item={item} />
            </div>
          ))}
        </div>
        <CartPrice />
      </div></> : <h1>Your Cart is Empty! 🙁</h1>}
    </div>
  );
};

export default Cart;
