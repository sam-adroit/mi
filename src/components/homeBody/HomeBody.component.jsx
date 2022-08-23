import React from "react";
import SecurityCam from "./securitycam/SecurityCam.component";
import About from "./about/About.component";
import Apps from "./apps/Apps.component";
import Testimonials from "./testimonials/Testimonials.component";

import "./HomeBody.css";

function HomeBody() {
  return (
    <div>
      <SecurityCam />
      <About />
      <Apps />
      <Testimonials />
    </div>
  );
}

export default HomeBody;
