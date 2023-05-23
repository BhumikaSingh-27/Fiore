import React, { useContext } from "react";
import WishlistCart from "./components/WishlistCart";
import "./components/Wishlist.css";
import { DataContext } from "../../contexts/DataContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Wishlist = () => {
  const { state } = useContext(DataContext);

  if (state.wishlistData.length === 0) {
    toast.warn("Removed from Wishlist", {
      position: toast.POSITION.TOP_RIGHT,
      theme: "light",
      autoClose: 2000,
      toastId: "warn1", //used to remove duplicate.
      // theme:"colored"
    });
  }
  return (
    <div>
      {state.wishlistData.length ? (
        <>
          <div className="wishlist-header">
            <h1>My Wishlist ({state.wishlistData.length})</h1>
          </div>
          <div className="wishlist-body">
            {state?.wishlistData.map((item) => (
              <WishlistCart item={item} />
            ))}
          </div>
        </>
      ) : (
        <h1>Your Wishlist is empty! 🙁</h1>
      )}
      <ToastContainer />
    </div>
  );
};

export default Wishlist;
