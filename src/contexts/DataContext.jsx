import { createContext, useEffect, useReducer, useState } from "react";
import { initialValue, reducerFn } from "../reducer/reducer";
import { useNavigate } from "react-router-dom";

export const DataContext = createContext();

export const DataContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducerFn, initialValue);
  const navigate = useNavigate();

  const [inputSignUp, setInputSignUp] = useState({
    firstName: null,
    lastName: null,
    email: null,
    password: null,
  });

    // calculating total price and discount
  const totalPrice = state.cartData.reduce((acc, cur) => cur.price * cur.qty + acc, 0);
  const discount = state.cartData.reduce((acc, cur) => cur.discount + acc, 0);

  const getCategoryData = async () => {
    try {
      const response = await fetch("/api/categories");
      const data = await response.json();
      dispatch({ type: "GET_CATEGORY_DATA", payload: data.categories });
    } catch (e) {
      console.log(e);
    }
  };

  const getProductData = async () => {
    try {
      const response = await fetch("/api/products");
      const data = await response.json();
      dispatch({ type: "GET_PRODUCT_DATA", payload: data.products });
    } catch (e) {
      console.log(e);
    }
  };

  // function to remove item from cart
  const removeItemFromCart = (itemId) => {
    (async () => {
      try {
        const res = await fetch(`/api/user/cart/${itemId}`, {
          method: "DELETE",
          headers: {
            authorization: localStorage.getItem("encodedToken"),
          },
        });
        const data = await res.json();
        console.log(data);
        dispatch({ type: "ADD_ITEM", payload: data.cart });
      } catch (e) {
        console.log(e);
      }
    })();
  };

  const addItemToCart = async (item) => {
    try {
      // console.log("before adding",item)
      // console.log(JSON.stringify(item))
      const flowerData = { product: item };
      const res = await fetch("/api/user/cart", {
        method: "POST",
        headers: {
          authorization: localStorage.getItem("encodedToken"),
        },
        body: JSON.stringify(flowerData),
      });

      const data = await res.json();
      //   console.log(data.cart);
      dispatch({ type: "ADD_ITEM", payload: data.cart });
    } catch (e) {
      console.log(e);
    }
  };

  const addToCart = (location, item) => {
    if (localStorage.getItem("encodedToken")) {
      addItemToCart(item);
    } else {
      navigate("/login", { state: { from: location } });
    }
  };

  const removeFromWishlist = (flower) => {
    (async () => {
      try {
        const res = await fetch(`/api/user/wishlist/${flower._id}`, {
          method: "DELETE",
          headers: {
            authorization: localStorage.getItem("encodedToken"),
          },
        });

        const data = await res.json();
        dispatch({ type: "ADD_TO_WISHLIST", payload: data.wishlist });
      } catch (e) {
        console.log(e);
      }
    })();
  };
  const addItemToWishlist = async (item) => {
    // const alter = { ...item, wishlist: true };
    try {
      const flower = { product: item };
      const res = await fetch("/api/user/wishlist", {
        method: "POST",
        headers: {
          authorization: localStorage.getItem("encodedToken"),
        },
        body: JSON.stringify(flower),
      });

      const data = await res.json();
      dispatch({ type: "ADD_TO_WISHLIST", payload: data.wishlist });
    } catch (e) {
      console.log(e);
    }
  };

  const addToWishlist = (location, flower) => {
    if (localStorage.getItem("encodedToken")) {
      addItemToWishlist(flower);
    } else {
      navigate("/login", { state: { from: location } });
    }
  };

  const userLogOut = (location) => {
    localStorage.clear();
    navigate(location);
  };

  useEffect(() => {
    getCategoryData();
    getProductData();
  }, []);

  const incrementItem = (itemId) => {
    (async () => {
      const type = {
        action: {
          type: "increment",
        },
      };
      const response = await fetch(`/api/user/cart/${itemId}`, {
        method: "POST",
        headers: {
          authorization: localStorage.getItem("encodedToken"),
        },
        body: JSON.stringify(type),
      });

      const data = await response.json();
      dispatch({ type: "ADD_ITEM", payload: data.cart });
    })();
  };

  const decrementItem = (itemId) => {
    (async () => {
      const type = {
        action: {
          type: "decrement",
        },
      };
      try {
        const response = await fetch(`/api/user/cart/${itemId}`, {
          method: "POST",
          headers: {
            authorization: localStorage.getItem("encodedToken"),
          },
          body: JSON.stringify(type),
        });
        const data = await response.json();
        // console.log(data);
        dispatch({ type: "ADD_ITEM", payload: data.cart });
      } catch (e) {
        console.log(e);
      }
    })();
  };
  return (
    <DataContext.Provider
      value={{
        state,
        dispatch,
        setInputSignUp,
        inputSignUp,
        addToCart,
        userLogOut,
        addToWishlist,
        removeFromWishlist,
        removeItemFromCart,
        addItemToCart,
        addItemToWishlist,
        incrementItem,
        decrementItem,
        totalPrice,
        discount
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
