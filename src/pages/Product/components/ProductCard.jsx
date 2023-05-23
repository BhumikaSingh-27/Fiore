import React, { useContext } from "react";
import { FaRegHeart } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { DataContext } from "../../../contexts/DataContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductCard = ({ flower }) => {
  const { _id, name, image, price, discount, rating } = flower;

  const { state, addToCart, addToWishlist, removeFromWishlist } =
    useContext(DataContext);

  const location = useLocation();
  const navigate = useNavigate();

  const setWishlist = (location, flower) => {
    if (!wishlistItem) {
      addToWishlist(location, flower);
      toast.success("Added to Wishlist", {
        position: toast.POSITION.TOP_RIGHT,
        theme: "light",
        autoClose: 2000,
      });
    } else {
      removeFromWishlist(flower);
      toast.warn("Removed from Wishlist", {
        position: toast.POSITION.TOP_RIGHT,
        theme: "light",
        autoClose: 2000,
        // theme:"colored"
      });
    }
  };

  const setCart = (location, flower) => {
    if (!cartItem) {
      addToCart(location, flower);
      toast.success("Item added to Cart!", {
        position: toast.POSITION.TOP_RIGHT,
        theme: "light",
        autoClose: 2000,
      });
    } else {
      navigate("/cart");
    }
  };

  const wishlistItem = state?.wishlistData?.find((item) => item._id === _id);
  // console.log("inside wishlist", wishlistItem?.wishlist);
  // console.log("inside flower", flower);

  const cartItem = state?.cartData.find((item) => item._id === _id);
  console.log("cart item", cartItem);
  return (
    <>
      <div key={_id}>
        <div className="product-card">
          <img class="product-img" src={image} alt={name} />{" "}
          <span className="heart" onClick={() => setWishlist(location, flower)}>
            {wishlistItem ? <FaHeart color="red" /> : <FaRegHeart />}
          </span>
          <div className="prduct-title">
            <div class="product-name">
              <NavLink
                className="not-a-link product-link"
                to={`/product/${_id}`}
              >
                {" "}
                <div>{name}</div>
              </NavLink>
            </div>
            <div className="product-star">
              <div className="align-star">
                {rating} <FaStar size={10} />
              </div>
            </div>
          </div>
          <div class="product-price-details">
            {" "}
            <h2>&#x20B9;{discount}</h2>{" "}
            <p className="cross-text">&#x20B9;{price} </p>
            <span>({Math.round(((price - discount) / price) * 100)}%OFF)</span>
          </div>
          {/* <div class="product-price-details">
        <div className="price-info">
            <h1>&#x20B9;7000</h1>
            <p className="cross-price">&#x20B9;200 </p> <span>(30%OFF)</span>
          </div>
          </div> */}
          {/* {console.log(flower)} */}
          <button className="add-btn" onClick={() => setCart(location, flower)}>
            <FaShoppingCart /> {cartItem ? "Go to Cart" : "Add to Cart"}
          </button>
          <ToastContainer />
        </div>
      </div>
    </>
  );
};

export default ProductCard;
