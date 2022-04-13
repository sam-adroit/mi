import React from "react";

import "./inverterDetails.css";

function InverterDetails() {
  return (
    <div className="inverter-details">
      <h2>Inverter Details</h2>
      <div className="inverter-reading">
        <ul className="input-reading">
          <li>
            <p>
              AC IN/<span className="units">volts</span>
            </p>
            <span className="red">159</span>
          </li>
          <li>
            <p>Mode</p>
            <span>Idle</span>
          </li>
          <li>
            <p>State</p>
            <span>Off</span>
          </li>
          <li>
            <p>
              Solar/<span className="units">volts</span>
            </p>
            <span className="red">135</span>
          </li>
        </ul>
        <ul className="output-reading">
          <li>
            <p>
              AC OUT/<span className="units">volts</span>
            </p>
            <span className="red">159</span>
          </li>
          <li>
            <p>
              Battery <span className="units">%</span>
            </p>
            <span className="green">80</span>
          </li>
          <li>
            <p>
              Load <span className="units">kwh</span>
            </p>
            <span className="green">12.08</span>
          </li>
          <li>
            <p>
              Temp/<span className="units">&#176;C</span>
            </p>
            <span className="green">28</span>
          </li>
        </ul>
      </div>
      <button>Trace Inverter</button>
    </div>
  );
}

export default InverterDetails;
