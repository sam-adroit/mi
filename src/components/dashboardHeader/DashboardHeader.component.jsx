import React from "react";
import User from "../../assets/user.png";
import { BsBellFill, BsSearch } from "react-icons/bs";

import "./DashboardHeader.css";

function DashboardHeader() {
  return (
    <div className="dashboarHeader">
      <div className="search-and-user">
        <div className="search-pos">
          <input type="search" placeholder="Search" />
          <BsSearch className="search-icon" />
        </div>
        <div className="alarm-user">
          <span className="alarm-icon">
            <BsBellFill />
          </span>

          <img src={User} alt="" />
          <span>Mark Johnson</span>
        </div>
      </div>
    </div>
  );
}

export default DashboardHeader;
