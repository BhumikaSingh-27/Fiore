import { createContext, useEffect, useReducer, useState } from "react";
import { initialAddress, orderReducerFn } from "../reducer/orderReducer";

export const AddressContext = createContext();

export const AddressContextProvider = ({ children }) => {
  const [checkoutAddress, setCheckoutAddress] = useState(
    "Select the address to deliver the product"
  );

  const [userAdd, setUserAdd] = useState({});
  const [userInfo, setUserInfo] = useState({});
  const [newAddress, setNewAddress] = useState({
    id: null,
    name: null,
    houseNo: null,
    city: null,
    stateName: null,
    country: null,
    postalCode: null,
    mobile: null,
  });

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

  const defaultUser = {
    "bhumika@gmail.com": defaultAddress,
  };

  const updateAddress = () => {
    setNewAddress({
      name: "Bhumika Singh",
      houseNo: "savita sadan, road no 18/4A",
      city: "Patna",
      state: "Bihar",
      country: "India",
      postalCode: "800024",
      mobile: "7999899345",
    });
  };

  const key = userInfo?.email;
  // console.log("key", key);

  const address = userAdd[key];
  // console.log("context", address);

  useEffect(() => {
    setUserAdd(defaultUser);
  }, []);

  console.log("user", userAdd);
  return (
    <AddressContext.Provider
      value={{
        checkoutAddress,
        setCheckoutAddress,
        defaultAddress,
        userInfo,
        setUserInfo,
        userAdd,
        setUserAdd,
        address,
        newAddress,
        setNewAddress,
        updateAddress,
      }}
    >
      {children}
    </AddressContext.Provider>
  );
};
