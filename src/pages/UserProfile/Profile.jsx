import React, { useContext } from "react";
import "./UserProfile.css";

import { DataContext } from "../../contexts/DataContext";
import { useLocation } from "react-router-dom";

const Profile = () => {
  const { inputSignUp, userLogOut } = useContext(DataContext);

  return (
    <div>
      <div className="profile-container">
        <h3>Profile Details</h3>
        <hr />
        <div style={{margin:"5px"}}>
          {inputSignUp.firstName && inputSignUp.lastName ? (
            <>
              <p>
                <b>full name: </b>
                {inputSignUp.firstName} {inputSignUp.lastName}
              </p>
              <p>
                <b>email:</b> {inputSignUp.email}
              </p>
            </>
          ) : (
            <>
              <p>
                <p>
                  <b>full name: </b>Bhumika Singh
                </p>

                <p>
                  <b>email:</b> bhumika@gmail.com
                </p>
              </p>
            </>
          )}
        </div>
        <button className="add-btn" onClick={() => userLogOut("/profile")}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Profile;
