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
  const [timer, setTimer] = useState(true);
  const { token } = useContext(authContext);
  const { sidebar, setSidebar } = useContext(SidebarContext);

  const timeCtrl = () => {
    setTimeout(() => {
      setTimer(true);
    }, 10000);
  };

  const alarmCtrl = () => {
    setAlarm(!alarm);
    setTimer(false);
    if (alarm) {
      fetch(
        "https://mexd-backend.herokuapp.com/control?deviceId=mo0001&instruction=alarm%20%on",
        {
          method: "GET",
          headers: {
            Authorization: token,
          },
        }
      );
    } else {
      fetch(
        "https://mexd-backend.herokuapp.com/control?deviceId=mo0001&instruction=alarm%20%off",
        {
          method: "GET",
          headers: {
            Authorization: token,
          },
        }
      );
    }
    timeCtrl();
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
          {timer ? (
            <span className="alarm-icon" onClick={alarmCtrl}>
              <BsBellFill />
            </span>
          ) : (
            <span className="alarm-icon">
              <BsBellFill />
            </span>
          )}

          <img src={User} alt="" />
          <span className="usr-name">Mark Johnson</span>
        </div>
      </div>
    </div>
  );
}

export default DashboardHeader;
