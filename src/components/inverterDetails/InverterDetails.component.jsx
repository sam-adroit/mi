import React, { useContext } from "react";
import { InverterDetailsContext } from "../../context/InverterDetailsContext";

import "./inverterDetails.css";

function InverterDetails() {
  const { inverterDetail, handleClickSendMessage } = useContext(
    InverterDetailsContext
  );
  return (
    <div className="inverter-details">
      <h2>Inverter Details</h2>
      <div className="inverter-reading">
        <ul className="input-reading">
          <li>
            <p>
              AC IN/<span className="units">volts</span>
            </p>
            <span className="red">
              {inverterDetail.battery ? inverterDetail.inverterState : "-"}
            </span>
          </li>
          <li>
            <p>Mode</p>
            <span>
              {inverterDetail.battery ? inverterDetail.inverter_mode : "-"}
            </span>
          </li>
          <li>
            <p>State</p>
            <span>
              {inverterDetail.battery ? inverterDetail.inverterState : "-"}
            </span>
          </li>
          <li>
            <p>
              Solar/<span className="units">volts</span>
            </p>
            <span className="red">
              {inverterDetail.battery ? inverterDetail.solarVolt : "-"}
            </span>
          </li>
        </ul>
        <ul className="output-reading">
          <li>
            <p>
              AC OUT/<span className="units">volts</span>
            </p>
            <span className="red">
              {inverterDetail.battery ? inverterDetail.acVoltage : "-"}
            </span>
          </li>
          <li>
            <p>
              Battery <span className="units">%</span>
            </p>
            <span className="green">
              {inverterDetail.battery ? inverterDetail.battery : "-"}
            </span>
          </li>
          <li>
            <p>
              Load <span className="units">kwh</span>
            </p>
            <span className="green">
              {inverterDetail.battery ? inverterDetail.powerConsumption : "-"}
            </span>
          </li>
          <li>
            <p>
              Temp/<span className="units">&#176;C</span>
            </p>
            <span className="green">
              {inverterDetail.battery ? inverterDetail.temperature : "-"}
            </span>
          </li>
        </ul>
      </div>
      <button onClick={handleClickSendMessage}>Trace Inverter</button>
    </div>
  );
}

export default InverterDetails;
