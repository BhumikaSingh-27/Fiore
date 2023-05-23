import React, { useContext } from "react";
import "./Wishlist.css";
import "../../Cart/Cart.css";
import { DataContext } from "../../../contexts/DataContext";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const WishlistCart = ({ item }) => {
  const { state, addItemToCart, removeFromWishlist } = useContext(DataContext);
  const navigate = useNavigate();

  const { _id, name, image, discount, price } = item;
  const getItem = state?.cartData.find(({ _id }) => _id === item._id);

  const addItemToCartFromWishlist = (item) => {
    if (!getItem) {
      addItemToCart(item);
      toast.success("Added to Cart", {
        position: toast.POSITION.TOP_RIGHT,
        theme: "light",
        autoClose: 2000,
      });

    } else {
      navigate("/cart");
    }
  };

  const removeItem = (item) => {
    removeFromWishlist(item);
    // toast.warn("Removed from Wishlist", {
    //   position: toast.POSITION.TOP_RIGHT,
    //   theme: "light",
    //   autoClose: 2000,
    //   // theme:"colored"
    // });
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
            onClick={() => removeItem(item)}
          >
            {" "}
            Remove from Wishlist
          </button>
          <button
            className="add-to-wishlist"
            onClick={() => addItemToCartFromWishlist(item)}
          >
            {getItem ? "Go to Cart" : "Add to Cart"}
          </button>
        </div>
      </div>
      {/* <ToastContainer /> */}
    </div>
  );
};

export default WishlistCart;
