import React from "react";
import User from "../../../../../assets/user.png";

import "./message.css";

function Message({ direction }) {
  return (
    <div className={direction ? `Message ${direction[0]}` : "Message"}>
      <img src={User} alt="" />
      <div className="name-message-list">
        <h2>Johnson Buyan</h2>
        <div
          className={
            direction ? `message-time ${direction[1]}` : "message-time"
          }
        >
          <p>Hello Mr Mark,</p>
          <span>9:20 PM</span>
        </div>
      </div>
    </div>
  );
}

export default Message;
