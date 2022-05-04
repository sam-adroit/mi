import React, { useContext } from "react";
import User from "../../assets/user.png";
import { SidebarContext } from "../../context/SidebarContext";
import { BsBellFill, BsSearch } from "react-icons/bs";
import { BiMenu } from "react-icons/bi";
import { MdClose } from "react-icons/md";

import "./DashboardHeader.css";

function DashboardHeader() {
  const { sidebar, setSidebar } = useContext(SidebarContext);
  return (
    <div className="dashboarHeader">
      <div className="mobile-hamburger--search">
        <span onClick={() => setSidebar(!sidebar)}>
          {sidebar ? (
            <span className="hamb">
              <MdClose />
            </span>
          ) : (
            <span className="hamb">
              <BiMenu />
            </span>
          )}
        </span>
        <span className="search">
          <BsSearch />
        </span>
      </div>
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
          <span className="usr-name">Mark Johnson</span>
        </div>
      </div>
    </div>
  );
}

export default DashboardHeader;
