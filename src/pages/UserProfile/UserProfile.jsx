import React, { useContext, useEffect } from "react";
import Profile from "./Profile";
import Address from "./Address";
import { AddressContext } from "../../contexts/AddressContext";
import { DataContext } from "../../contexts/DataContext";

const UserProfile = () => {
  const { address,setCheckoutAddress, defaultAddress, addressDispatch } =
    useContext(AddressContext);
  // const { inputLogin, setInputLogin } = useContext(DataContext);

  console.log(address.user)
  useEffect(() => {
    setCheckoutAddress("Select the address to deliver the product");
  }, []);

  useEffect(() => {
    (() => {
      // if (
      //   inputLogin.email === "bhumika@gmail.com" &&
      //   inputLogin.password === "bhumi27"
      // ) {
        try {
          addressDispatch({ type: "DEFAULT_ADDRESS", payload: defaultAddress });
        } catch (e) {
          console.log(e);
        }
      // } else {
      //   addressDispatch({ type: "DEFAULT_ADDRESS", payload: [] });
      // }
    })();
  }, []);

  

  return (
    <div className="profile-body">
      <h1>Account</h1>
      <div className="align-profile">
        <div>
          <Profile />
        </div>
        <div>
          <Address />
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
