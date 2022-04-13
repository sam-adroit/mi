import React from "react";
import Sidebar from "../../components/sidebar/Sidebar.component";
import DashboardBody from "../../components/dasboardBody/DashboardBody.component";
import "./dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard">
      <Sidebar />
      <DashboardBody />
    </div>
  );
}

export default Dashboard;
