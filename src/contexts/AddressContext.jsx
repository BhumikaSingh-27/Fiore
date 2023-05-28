import { createContext, useEffect, useReducer, useState } from "react";
import { initialAddress, orderReducerFn } from "../reducer/orderReducer";

export const AddressContext = createContext();

export const AddressContextProvider = ({ children }) => {
  const [address, addressDispatch] = useReducer(orderReducerFn, initialAddress);
  const [checkoutAddress, setCheckoutAddress] = useState("Select the address to deliver the product");
  console.log(address);

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

  useEffect(() => {
    (() => {
      try {
        addressDispatch({ type: "DEFAULT_ADDRESS", payload: defaultAddress });
      } catch (e) {
        console.log(e);
      }
    })();
  }, []);

  return (
    <AddressContext.Provider
      value={{ address, addressDispatch, checkoutAddress, setCheckoutAddress }}
    >
      {children}
    </AddressContext.Provider>
  );
};
