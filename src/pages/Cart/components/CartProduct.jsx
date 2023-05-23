import React, { useContext } from "react";
import "../Cart.css";
import "../../Product/Product.css";
import { DataContext } from "../../../contexts/DataContext";

const CartProduct = ({ item }) => {
  const {
    state,
    removeItemFromCart,
    removeFromWishlist,
    addToWishlist,
    incrementItem,
    decrementItem,
  } = useContext(DataContext);
  const { _id, name, image, price, discount, qty } = item;

  const getItem = state?.wishlistData.find(({ _id }) => _id === item._id);

  const addToWishlistFromCart = (item) => {
    if (!getItem) {
      addToWishlist(item);
      removeItemFromCart(_id);
    }
    removeFromWishlist(item)
  };

  const checkQtyandDecrement = (itemId) => {
    if (qty === 0) {
      removeItemFromCart(itemId);
    } else {
      decrementItem(_id);
    }
  };

  return (
    <div key={_id}>
      <div className="cart-product-card">
        <img src={image} alt={name} />
        <div className="cart-product-details">
          <div className="cart-product-title">
            {" "}
            <h3 className="title">{name}</h3>
            <div className="display-flex">
              <div className="price-info">
                <h1>&#x20B9; {discount}</h1>
                <p className="cross-price">&#x20B9;{price} </p>{" "}
                <span>
                  ({Math.round(((price - discount) / price) * 100)}%OFF)
                </span>
              </div>
            </div>
            <div>
              Quantity:{" "}
              <button
                className="quantity-change-btn"
                onClick={() => checkQtyandDecrement(_id)}
              >
                -
              </button>{" "}
              {qty}{" "}
              <button
                className="quantity-change-btn"
                onClick={() => incrementItem(_id)}
              >
                +
              </button>
            </div>
          </div>

          <button
            className="add-btn remove-btn"
            onClick={() => removeItemFromCart(_id)}
          >
            Remove from Cart
          </button>
          <button
            className="add-to-wishlist"
            onClick={() => addToWishlistFromCart(item)}
          >
            {getItem ? "Remove from wishlist" : "Add to wishlist"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
