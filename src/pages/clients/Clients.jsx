import React from "react";
import Sidebar from "../../components/sidebar/Sidebar.component";
import ClientsBody from "../../components/clientsBody/ClientsBody.component";

import "./clients.css";

function Clients() {
  return (
    <div className="clients-page">
      <Sidebar />
      <ClientsBody />
    </div>
  );
}

export default Clients;
