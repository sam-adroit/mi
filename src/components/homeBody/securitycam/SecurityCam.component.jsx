import React from "react";
import Cam from "../../../assets/cam.png";
import Inverter from "../../../assets/inverter.png";

function SecurityCam() {
  return (
    <div>
      <div className="security-text">
        <h2>INVERTERS AND SECURITY CAMERA</h2>
        <p>
          An innovation that leverages on artificial intelligence in providing
          smart inverters, security cameras and management services in the most
          affordable rate for everyone
        </p>
        <button>view product &gt;&gt;</button>
      </div>
      <div className="security-img"></div>
      <div className="cam">
        <div className="sec-cam">
          <img src={Cam} alt="CCTV" />
          <h4>Security Camera</h4>
        </div>
        <div className="smart-inv">
          <img src={Inverter} alt="Inverter" />
          <h4>Smart Inverters</h4>
        </div>
      </div>
    </div>
  );
}

export default SecurityCam;
