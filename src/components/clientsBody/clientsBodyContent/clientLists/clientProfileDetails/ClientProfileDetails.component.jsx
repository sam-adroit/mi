import React from "react";
import User from "../../../../../assets/user.png";
import { BsChatFill } from "react-icons/bs";

import "./clientProfileDetails.css";
import { useNavigate } from "react-router-dom";

function ClientProfileDetails({ inverterDetail }) {
  const { id, username, client } = inverterDetail;
  const navigate = useNavigate();
  return (
    <div
      className="client-profile-details"
      onClick={() => {
        window.innerWidth <= 600 && navigate("/clients/details");
      }}
    >
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
