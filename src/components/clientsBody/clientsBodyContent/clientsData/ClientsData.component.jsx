import React from "react";
import ClientDetails from "../../../clientDetails/ClientDetails.component";
import InverterDetails from "../../../inverterDetails/InverterDetails.component";
import Biodata from "./biodata/Biodata.component";

import "./clientsData.css";

function ClientsData() {
  return (
    <div className="client-data">
      <div className="client-address">
        <h2>Details</h2>
        <Biodata />
      </div>
      <ClientDetails />
      <div className="clients-data-inverter-details">
        <InverterDetails />
      </div>
    </div>
  );
}

export default ClientsData;
