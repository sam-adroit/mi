import React from "react";
import DashboardHeader from "../dashboardHeader/DashboardHeader.component";

import "./clientsBody.css";
import ClientsBodyContent from "./clientsBodyContent/ClientsBodyContent.component";

function ClientsBody() {
  return (
    <div className="clients-body">
      <DashboardHeader />
      <ClientsBodyContent />
    </div>
  );
}

export default ClientsBody;
