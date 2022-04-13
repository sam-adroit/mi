import React from "react";
import InverterReadings from "./inverter-readings/InverterReadings.component";
import { inverDetails } from "../../../../utils/userData";
import { BsArrowRight } from "react-icons/bs";

import "./dashboardBodySidebarContent.css";

function DashboardBodySidebarContent() {
  return (
    <div className="dashboard-sidebar--content">
      <h2>Control Panel</h2>
      <div className="control--panel-content">
        <h2>Inverters</h2>
        {inverDetails.map((details) => (
          <InverterReadings key={details.id} details={details} />
        ))}
        <p>
          See all Inverters <BsArrowRight className="arrow" />
        </p>
      </div>
    </div>
  );
}

export default DashboardBodySidebarContent;
