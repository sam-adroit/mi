import React, { useContext, useState } from "react";
import User from "../../assets/user.png";
import { SidebarContext } from "../../context/SidebarContext";
import { authContext } from "../../context/AuthContext";
import { BsBellFill, BsSearch } from "react-icons/bs";
import { BiMenu } from "react-icons/bi";
import { MdClose } from "react-icons/md";

import "./DashboardHeader.css";

function DashboardHeader() {
  const [alarm, setAlarm] = useState(false);
  const { token } = useContext(authContext);
  const { sidebar, setSidebar } = useContext(SidebarContext);
  const alarmCtrl = () => {
    setAlarm(!alarm);
    if (alarm) {
      fetch(
        "https://mexd-backend.herokuapp.com/control?deviceId=mo0001&instruction=alarm%20%on",
        {
          method: "GET",
          headers: {
            Authorization: token,
          },
        }
      ).then((res) => console.log(res));
    } else {
      fetch(
        "https://mexd-backend.herokuapp.com/control?deviceId=mo0001&instruction=alarm%20%off",
        {
          method: "GET",
          headers: {
            Authorization: token,
          },
        }
      ).then((res) => console.log(res));
    }
  };
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
          <span className="alarm-icon" onClick={alarmCtrl}>
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
