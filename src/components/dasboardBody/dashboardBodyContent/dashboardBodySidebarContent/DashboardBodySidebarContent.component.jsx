import React, { useEffect, useState } from "react";
import InverterReadings from "./inverter-readings/InverterReadings.component";
import { inverDetails } from "../../../../utils/userData";
import { BsArrowRight } from "react-icons/bs";

import "./dashboardBodySidebarContent.css";

function DashboardBodySidebarContent() {
  const [noInvert, setnoInvert] = useState(5);
  useEffect(() => {
    window.innerWidth > 600 ? setnoInvert(5) : setnoInvert(3);
  }, []);

  return (
    <div className="dashboard-sidebar--content">
      <h2>Control Panel</h2>
      <div className="control--panel-content">
        <h2>Inverters</h2>
        {inverDetails.slice(0, noInvert).map((details) => (
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
