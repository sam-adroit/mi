import React, { useState, useContext } from "react";
import { BsToggle2On, BsToggle2Off } from "react-icons/bs";
import { TiLockClosed, TiLockOpen } from "react-icons/ti";
// import { IoIosUnlock } from "react-icons/io";
import { authContext } from "../../context/AuthContext";

import "./clientDetails.css";

function ClientDetails() {
  const { token } = useContext(authContext);
  const [inverterSwitch, setInverterSwitch] = useState(false);
  const [inverterLock, setInverterLock] = useState(false);
  const [timer, setTimer] = useState(true);

  const timeCtrl = () => {
    setTimeout(() => {
      setTimer(true);
    }, 10000);
  };

  const handleInverterSwitch = () => {
    timer && setInverterSwitch(!inverterSwitch);
    // console.log(token);
    if (timer) {
      setTimer(false);
      if (inverterSwitch) {
        fetch(
          "https://mexd-backend.herokuapp.com/control?deviceId=mo0001&instruction=on",
          {
            method: "GET",
            headers: {
              Authorization: token,
            },
          }
        ).then((res) => console.log(res));
      } else {
        fetch(
          "https://mexd-backend.herokuapp.com/control?deviceId=mo0001&instruction=off",
          {
            method: "GET",
            headers: {
              Authorization: token,
            },
          }
        ).then((res) => console.log(res));
      }
    }

    timeCtrl();
  };

  const handleInverterLock = () => {
    timer && setInverterLock(!inverterLock);
    // console.log(token);
    if (timer) {
      setTimer(false);
      if (inverterLock) {
        fetch(
          "https://mexd-backend.herokuapp.com/control?deviceId=mo0001&instruction=lock",
          {
            method: "GET",
            headers: {
              Authorization: token,
            },
          }
        ).then((res) => console.log(res));
      } else {
        fetch(
          "https://mexd-backend.herokuapp.com/control?deviceId=mo0001&instruction=unlock",
          {
            method: "GET",
            headers: {
              Authorization: token,
            },
          }
        ).then((res) => console.log(res));
      }
    }
    timeCtrl();
  };

  return (
    <div className="clientDetails">
      <h2>Client SS 2A521</h2>
      <ul className="client-details-list">
        <li>MexD: R12</li>
        <li onClick={handleInverterSwitch}>
          <span>System Status</span>
          {inverterSwitch ? (
            <BsToggle2On className="toggle" />
          ) : (
            <BsToggle2Off className="toggle toggle-off" />
          )}
        </li>
        <li onClick={handleInverterLock}>
          <span>Lock System</span>
          {inverterLock ? (
            <TiLockOpen className="lock" />
          ) : (
            <TiLockClosed className="lock" />
          )}
        </li>
        <li>Access: 2 members</li>
      </ul>
    </div>
  );
}

export default ClientDetails;
