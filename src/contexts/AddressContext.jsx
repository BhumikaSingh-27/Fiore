import { createContext, useReducer } from "react";
import { initialAddress, orderReducerFn } from "../reducer/orderReducer";

export const AddressContext = createContext();

export const AddressContextProvider = ({ children }) => {
  const [address, addressDispatch] = useReducer(orderReducerFn, initialAddress);
  console.log(address);
  const addressList = [
    {
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
    <AddressContext.Provider value={{addressList, address, addressDispatch }}>
      {children}
    </AddressContext.Provider>
  );
};
