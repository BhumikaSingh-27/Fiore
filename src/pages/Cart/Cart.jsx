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
        <div className="cart-container-margin">
          <div className="cart-header">
            <h1>My Cart ({state.cartData.length})</h1>
          </div>

          <div className="cart-main">
            <div className="cart-product-list">
              <div className="cart-list">
                {state?.cartData.map((item) => (
                  <div key={item._id}>
                    <CartProduct item={item} />
                  </div>
                ))}
              </div>
            </div>
            <CartPrice />
          </div>
        </div>
      ) : (
        <div className="cart-container-margin">
          <h1>Your Cart is Empty! 🙁</h1>
        </div>
      )}
    </div>
  );
};

export default Cart;
