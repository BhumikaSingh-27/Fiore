import React, { useContext, useEffect } from "react";
import Profile from "./Profile";
import Address from "./Address";
import { AddressContext } from "../../contexts/AddressContext";
import { DataContext } from "../../contexts/DataContext";

const UserProfile = () => {
  const {  setCheckoutAddress } =
    useContext(AddressContext);
    
  const { setInputLogin } = useContext(DataContext);
  
  useEffect(() => {
    setCheckoutAddress("Select the address to deliver the product");
  }, []);

  useEffect(() => {
    setInputLogin({ email: null, password: null });
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
