import React from "react";
import cam from "../../../assets/lg-img.png";

import "./LeftContent.style.css";

function LeftContent() {
  return (
    <div className="left-content">
      <img src={cam} alt="web-cam" />
      <p>
        Moon Innovations is committed to supporting client requests promptly,
        efficiently and effectively
      </p>
    </div>
  );
}

export default LeftContent;
