import React, { useContext } from "react";
import "./UserProfile.css";
import { DataContext } from "../../contexts/DataContext";

const Profile = () => {
  const { inputSignUp, userLogOut } = useContext(DataContext);

  return (
    <div>
      <div className="profile-container">
        <h3>Profile Details</h3>
        <hr />
        <div className="align-center">
          {inputSignUp.firstName && inputSignUp.lastName ? (
            <div style={{ textAlign: "start" }}>
              <p>
                <b>full name: </b>
                {inputSignUp.firstName} {inputSignUp.lastName}
                <br />
                <b>email:</b> {inputSignUp.email}
              </p>
            </div>
          ) : (
            <>
              <div>
                <p>
                  <b>full name: </b>Bhumika Singh{" "}
                </p>

                <p>
                  {" "}
                  <b>email:</b> bhumika@gmail.com
                </p>
              </div>
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
