import React, { useContext } from "react";
import "../Cart.css";
import "../../Product/Product.css";
import { DataContext } from "../../../contexts/DataContext";
import { useNavigate } from "react-router-dom";

const CartProduct = ({ item }) => {
  const {
    state,
    removeItemFromCart,
    addItemToWishlist,
    incrementItem,
    decrementItem,
  } = useContext(DataContext);

  const navigate = useNavigate();
  const { _id, name, image, price, discount, qty } = item;

  const getItem = state?.wishlistData.find(({ _id }) => _id === item._id);

  const addToWishlistFromCart = (item) => {
    if (!getItem) {
      addItemToWishlist(item);
      removeItemFromCart(_id);
    } else {
      navigate("/wishlist");
    }
  };

  const checkQtyandDecrement = (itemId) => {
    if (qty > 1) {
      decrementItem(_id);
    } else {
      removeItemFromCart(itemId);
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
            {getItem ? "already in wishlist" : "Add to wishlist"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
