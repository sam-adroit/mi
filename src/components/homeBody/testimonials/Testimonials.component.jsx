import React from "react";
import User from "../../../assets/user.png";

function Testimonials() {
  return (
    <div>
      <h2>WHAT OUR CLIENTS SAY</h2>
      <p>“Long battery life, higher power capacity and durability”</p>
      <p>
        Our app download rate increased by 50% since we have the redesign done
        by Oopatrick. Our cutomers have an easy time navigating through it, our
        app is something users keep coming back to.
      </p>
      <img src={User} alt="" />
      <span>CEO, ACME INC</span>
    </div>
  );
}

export default Testimonials;
