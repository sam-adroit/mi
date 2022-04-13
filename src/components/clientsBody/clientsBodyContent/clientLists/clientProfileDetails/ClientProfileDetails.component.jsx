import React from "react";
import User from "../../../../../assets/user.png";
import { BsChatFill } from "react-icons/bs";

import "./clientProfileDetails.css";

function ClientProfileDetails({ inverterDetail }) {
  const { id, username, client } = inverterDetail;
  return (
    <div className="client-profile-details">
      <div className="profile-img">
        <img src={User} alt="" />
      </div>
      <div className="client-bio-inverter-details">
        <h3>{username}</h3>
        <p>{client}</p>
        <p>MexD: {id}</p>
      </div>
      <div className="message">
        <BsChatFill />
      </div>
    </div>
  );
}

export default ClientProfileDetails;
