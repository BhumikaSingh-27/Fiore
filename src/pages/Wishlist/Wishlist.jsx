import React, { useContext } from "react";
import WishlistCart from "./components/WishlistCart";
import "./components/Wishlist.css";
import { DataContext } from "../../contexts/DataContext";

const Wishlist = () => {
  const { state } = useContext(DataContext);

  return (
    <div>
      {state.wishlistData.length ? (
        <>
          <div className="wishlist-header">
            <h1>My Wishlist ({state.wishlistData.length})</h1>
          </div>
          <div className="wishlist-body">
            {state.wishlistData.map((item) => (
              <WishlistCart item={item} />
            ))}
          </div>
        </>
      ) : (
        <h1>Your Wishlist is empty! 🙁</h1>
      )}
    </div>
  );
};

export default Wishlist;
