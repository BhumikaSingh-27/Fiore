import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { initialAddress, orderReducerFn } from "../reducer/orderReducer";
import { DataContext } from "./DataContext";

export const AddressContext = createContext();

export const AddressContextProvider = ({ children }) => {
  const [address, addressDispatch] = useReducer(orderReducerFn, initialAddress);
  const [checkoutAddress, setCheckoutAddress] = useState(
    "Select the address to deliver the product"
  );
  
  const defaultAddress = [
    {
      id: 1,
      name: "Bhumika Singh",
      houseNo: "savita sadan, road no 18/4A",
      city: "Patna",
      state: "Bihar",
      country: "India",
      postalCode: "800024",
      mobile: "7999899345",
    },
  ];

  
  return (
    <AddressContext.Provider
      value={{ address, addressDispatch, checkoutAddress, setCheckoutAddress,defaultAddress }}
    >
      {children}
    </AddressContext.Provider>
  );
};
