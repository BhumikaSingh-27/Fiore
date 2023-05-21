import { createContext, useEffect, useReducer, useState } from "react";
import { initialValue, reducerFn } from "../reducer/reducer";

export const DataContext = createContext();

export const DataContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducerFn, initialValue);
  const [inputSignUp, setInputSignUp] = useState({
    firstName: null,
    lastName: null,
    email: null,
    password: null,
  });

  

  const getCategoryData = async () => {
    try {
      const response = await fetch("/api/categories");
      const data = await response.json();
      dispatch({ type: "GET_CATEGORY_DATA", payload: data.categories });
    } catch (e) {
      console.log(e);
    }
  };

  const getProductData = async() => {
    try{
        const response = await fetch("/api/products")
        const data = await response.json()
        dispatch({type: "GET_PRODUCT_DATA", payload: data.products})
    }catch(e){
        console.log(e)
    }
  }

console.log("got product data", state.productData )

  useEffect(() => {
    getCategoryData();
    getProductData();
  }, []);

  return (
    <DataContext.Provider value={{ state, dispatch,setInputSignUp,inputSignUp}}>
      {children}
    </DataContext.Provider>
  );
};
