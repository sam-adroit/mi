import React from "react";
import DashboardHeader from "../dashboardHeader/DashboardHeader.component";
import DashboardBodyContent from "./dashboardBodyContent/DashboardBodyContent.component";

import "./DashboardBody.css";

function DashboardBody() {
  return (
    <div className="dashboardBody">
      <DashboardHeader />
      <DashboardBodyContent />
    </div>
  );
}

export default DashboardBody;
