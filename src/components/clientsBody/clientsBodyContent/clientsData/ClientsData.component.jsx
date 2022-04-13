import React from "react";
import ClientDetails from "../../../clientDetails/ClientDetails.component";
import InverterDetails from "../../../inverterDetails/InverterDetails.component";

import "./clientsData.css";

function ClientsData() {
  return (
    <div className="client-data">
      <div className="client-address">
        <h2>Details</h2>
        <p>
          <span>Address: </span> No 3, Anifowose street, Abesan Estate, Ipaja,
          Lagos. Nigeria.
        </p>
        <p>
          <span>Email:</span> johnsonbuyan@gmail.com
        </p>
        <p>
          <span>Phone No: </span> +234 903 4567 345
        </p>
      </div>
      <ClientDetails />
      <div className="clients-data-inverter-details">
        <InverterDetails />
      </div>
    </div>
  );
}

export default ClientsData;
