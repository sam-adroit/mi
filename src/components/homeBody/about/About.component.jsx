import React from "react";
import Panel from "../../../assets/panel.png";

function About() {
  return (
    <div>
      <h2>ABOUT US</h2>
      <div className="about-content">
        <div className="abt-txt">
          <p>
            An innovation that leverages on artificial intelligence in providing
            smart inverters, security cameras and management services in the
            most affordable rate for everyone
          </p>
          <p>
            An innovation that leverages on artificial intelligence in providing
            smart inverters
          </p>
          <p>
            An innovation that leverages on artificial intelligence in providing
            smart inverters
          </p>
        </div>
        <div className="about-conten-img">
          <img src={Panel} alt="" />
        </div>
      </div>
    </div>
  );
}

export default About;
