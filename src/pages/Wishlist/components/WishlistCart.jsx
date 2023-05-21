import React, { useContext } from "react";
import "./Wishlist.css";
import "../../Cart/Cart.css";
import { DataContext } from "../../../contexts/DataContext";

const WishlistCart = ({ item }) => {
  const { addItemToCart, removeFromWishlist } = useContext(DataContext);

  const { _id, name, image, discount, price } = item;

  const addItemToCartFromWishlist = (item) => {
    addItemToCart(item);
    removeFromWishlist(item);
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
          </div>

          <button
            className="add-btn remove-btn"
            onClick={() => removeFromWishlist(item)}
          >
            {" "}
            Remove from Wishlist
          </button>
          <button
            className="add-to-wishlist"
            onClick={() => addItemToCartFromWishlist(item)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default WishlistCart;
