import React from "react";
import AddressForm from "./AddressForm";
import Profile from "./Profile";
import Address from "./Address";

const UserProfile = () => {
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
