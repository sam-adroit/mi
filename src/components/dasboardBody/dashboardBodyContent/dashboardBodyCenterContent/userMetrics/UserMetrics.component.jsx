import React from "react";
import { Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import "./UserMetrics.css";

Chart.register(...registerables);

const data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      label: "Monthly users",
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: ["#1eec33"],
      borderColor: ["#1eec33"],
      borderWidth: 1,
    },
  ],
};

function UserMetrics() {
  return (
    <div className="userMetrics">
      <div className="left-details">
        <div className="userDetails">
          <h2 className="au">Active Users</h2>
          <h2 className="no">81</h2>
          <p>From January till now</p>
        </div>
        <div className="circular-bar">
          <div className="outer-circle" id="deg">
            <div className="inner-circle">
              <span id="val">75%</span>
            </div>
          </div>
        </div>
      </div>
      <div className="graph-details">
        <Line
          data={data}
          height={130}
          width={500}
          options={{
            maintainAspectRatio: false,
            scales: {
              yAxes: {
                ticks: {
                  beginAtZero: true,
                },
              },
            },
          }}
        />
      </div>
    </div>
  );
}

export default UserMetrics;
