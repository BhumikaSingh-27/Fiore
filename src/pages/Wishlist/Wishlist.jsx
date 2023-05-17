import React from "react";
import WishlistCart from "./component/WishlistCart";
import "./component/Wishlist.css";

const Wishlist = () => {
  return (
    <div>
      <div className="wishlist-header">
        <h1>My Wishlist (1)</h1>
      </div>
      <div className="wishlist-body">
        <WishlistCart />
        <WishlistCart />
      </div>
    </div>
  );
};

export default Wishlist;
