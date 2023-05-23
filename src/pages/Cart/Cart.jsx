import React, { useContext } from "react";
import CartPrice from "./components/CartPrice";
import CartProduct from "./components/CartProduct";
import "./Cart.css";
import { DataContext } from "../../contexts/DataContext";

const Cart = () => {
  const { state } = useContext(DataContext);

  return (
    <div>
      {/* <Navbar /> */}
      {state?.cartData.length ? (
        <>
          <div className="cart-header">
            <h1>My Cart ({state.cartData.length})</h1>
          </div>

          <div className="cart-main">
            <div className="cart-list">
              {state?.cartData.map((item) => (
                <div key={item._id}>
                  <CartProduct item={item} />
                </div>
              ))}
            </div>
            <CartPrice />
          </div>
        </>
      ) : (
        <h1>Your Cart is Empty! 🙁</h1>
      )}
    </div>
  );
};

export default Cart;
