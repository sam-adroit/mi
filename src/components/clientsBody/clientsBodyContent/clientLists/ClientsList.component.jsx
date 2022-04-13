import React from "react";
import { inverDetails } from "../../../../utils/userData";
import ClientProfileDetails from "./clientProfileDetails/ClientProfileDetails.component";

import "./clientsList.css";

function ClientsList() {
  return (
    <div className="clients-list">
      <h2>Clients</h2>
      {inverDetails.map((inverterDetail) => (
        <ClientProfileDetails
          key={inverterDetail.id}
          inverterDetail={inverterDetail}
        />
      ))}
    </div>
  );
}

export default ClientsList;
