import React, { useContext } from "react";
import "./UserProfile.css";
import { useNavigate } from "react-router-dom";
import { DataContext } from "../../contexts/DataContext";

const Profile = () => {
  const { inputSignUp } = useContext(DataContext);
  const navigate = useNavigate();
  const userLogOut = () => {
    localStorage.clear();
    navigate("/");
  };
  return (
    <div>
      <div className="profile-container">
        <h3>Profile Details</h3>
        <hr />
        <div>
          {inputSignUp.firstName && inputSignUp.lastName ? (
            <>
              <p>
                <b>
                  full name: {inputSignUp.firstName} {inputSignUp.lastName}
                </b>
              </p>
              <p>
                <b>
                <b>email:</b> {inputSignUp.email}
                </b>
              </p>
            </>
          ) : (
            <>
              <p>
                <b>full name:</b>Bhumika Singh
              </p>

              <p>
                <b>email:</b> bhumika@gmail.com
              </p>
            </>
          )}
        </div>
        <button className="add-btn" onClick={userLogOut}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Profile;
