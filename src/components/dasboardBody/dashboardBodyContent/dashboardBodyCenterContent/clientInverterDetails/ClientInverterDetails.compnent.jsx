import React from "react";
import DashClientDetails from "./dashClientDetails/DashClientDetails.component";
import DashInverterDetails from "./dashInverterDetails/DashInverterDetails.component";

import "./clientInverterDetails.css";

function ClientInverterDetails() {
  return (
    <div className="clientInverterDetails">
      <DashClientDetails />
      <DashInverterDetails />
    </div>
  );
}

export default ClientInverterDetails;
