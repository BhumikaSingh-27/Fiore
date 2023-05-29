import React, { useContext } from "react";
import { FaRegHeart } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { DataContext } from "../../../contexts/DataContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductCard = ({ flower }) => {
  const { _id, name, image, price, discountedPrice, rating } = flower;

  const {
    state,
    addToCart,
    addToWishlist,
    removeFromWishlist,
   
  } = useContext(DataContext);

  const location = useLocation();
  const navigate = useNavigate();

  const setWishlist = (location, flower) => {
    if( localStorage.getItem("encodedToken")){
      if (!wishlistItem ) {
        addToWishlist(location, flower);
        toast.success("Added to Wishlist", {
          position: toast.POSITION.TOP_RIGHT,
          theme: "light",
          autoClose: 1000,
          className: "toast-align",
        });
      } else {
        removeFromWishlist(flower);
        toast.warn("Removed from Wishlist", {
          position: toast.POSITION.TOP_RIGHT,
          theme: "light",
          autoClose: 1000,
          className: "toast-align",
          // theme:"colored"
        });
      }
      // setIsClicked((prev) => ({ ...prev, wish: true }));
    }else{
      navigate("/login")
    }
    
  };

  const setCart = (location, flower) => {
    if (!cartItem && localStorage.getItem("encodedToken")) {
      addToCart(location, flower);
      toast.success("Item added to Cart!", {
        position: toast.POSITION.TOP_RIGHT,
        theme: "light",
        autoClose: 1000,
        className: "toast-align",
      });
    } else {
      navigate("/cart");
    }
    // setIsClicked((prev) => ({ ...prev, cart: true }));
  };

  // console.log(isClicked);
  const wishlistItem = state?.wishlistData?.find((item) => item._id === _id);
  const cartItem = state?.cartData.find((item) => item._id === _id);

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
            <h2>&#x20B9;{discountedPrice}</h2>{" "}
            <p className="cross-text">&#x20B9;{price} </p>
            <span>({Math.round(((price - discountedPrice) / price) * 100)}%OFF)</span>
          </div>
          <button className="add-btn" onClick={() => setCart(location, flower)}>
            <FaShoppingCart /> {cartItem ? "Go to Cart" : "Add to Cart"}
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
