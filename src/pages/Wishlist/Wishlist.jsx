import React, { useContext } from "react";
import WishlistCart from "./components/WishlistCart";
import "./components/Wishlist.css";
import { DataContext } from "../../contexts/DataContext";
import "react-toastify/dist/ReactToastify.css";

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
        <div className="wishlist-header">
          <h1>Your Wishlist is empty! 🙁</h1>
        </div>
      )}
    </div>
  );
};

export default Wishlist;
