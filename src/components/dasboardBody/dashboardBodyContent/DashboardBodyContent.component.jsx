import React from "react";
import DashboardBodyCenterContent from "./dashboardBodyCenterContent/DashboardBodyCenterContent.component";
import DashboardBodySidebarContent from "./dashboardBodySidebarContent/DashboardBodySidebarContent.component";

import "./DashboardBodyContent.css";

function DashboardBodyContent() {
  return (
    <div className="dashboardBodyContent">
      <DashboardBodyCenterContent />
      <DashboardBodySidebarContent />
    </div>
  );
}

export default DashboardBodyContent;
