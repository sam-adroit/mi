import React from "react";
import { BsToggle2On } from "react-icons/bs";
import { BiLockOpen } from "react-icons/bi";

import "./inverterReadings.css";

function InverterReadings({ details }) {
  return (
    <div className="inverter-readings">
      <ul className="inverter-reading-lists">
        <li>MexD: {details.id}</li>
        <li>
          <span>Inverter Telemetry</span>
          <BsToggle2On className="toggle-inv" />
        </li>
        <li>
          <span>Lock System</span>
          <BiLockOpen className="lock-in" />
        </li>
      </ul>
    </div>
  );
}

export default InverterReadings;
