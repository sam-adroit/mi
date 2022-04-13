import React from "react";
import ClientsList from "./clientLists/ClientsList.component";
import ClientsData from "./clientsData/ClientsData.component";

import "./clientsBodyContent.css";

function ClientsBodyContent() {
  return (
    <div className="clients-body--content">
      <ClientsList />
      <ClientsData />
    </div>
  );
}

export default ClientsBodyContent;
