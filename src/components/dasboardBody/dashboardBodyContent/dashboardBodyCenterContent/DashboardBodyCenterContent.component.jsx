import React from "react";
import UserMetrics from "./userMetrics/UserMetrics.component";
import ClientInverterDetails from "./clientInverterDetails/ClientInverterDetails.compnent";
import ChatLog from "./chatLog/ChatLog.compnent";

import "./dashboardBodyCenterContent.css";

function DashboardBodyCenterContent() {
  return (
    <div className="dashboardBodyCenterContent">
      <UserMetrics />
      <ClientInverterDetails />
      <ChatLog />
    </div>
  );
}

export default DashboardBodyCenterContent;
