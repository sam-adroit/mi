import React from "react";
import { useNavigate } from "react-router-dom";
import Biodata from "../../components/clientsBody/clientsBodyContent/clientsData/biodata/Biodata.component";
import ClientDetails from "../../components/clientDetails/ClientDetails.component";
import InverterDetails from "../../components/inverterDetails/InverterDetails.component";
import { BsArrowLeft } from "react-icons/bs";
import "./ClientDetailsMb.css";

function ClientDetailsMb() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="mb-header">
        <span onClick={() => navigate("/clients")}>
          <BsArrowLeft />
        </span>
        <h2>Clients Details</h2>
      </div>
      <div className="mb-client-details">
        <Biodata />
      </div>
      <div className="mb-client-details">
        <ClientDetails />
      </div>
      <div className="mb-client-details">
        <InverterDetails />
      </div>
    </div>
  );
}

export default ClientDetailsMb;
