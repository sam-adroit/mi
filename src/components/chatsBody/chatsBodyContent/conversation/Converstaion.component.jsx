import React from "react";
import Message from "./message/Message.component";
import { FiLink2 } from "react-icons/fi";
import { BiMicrophone } from "react-icons/bi";
import { BsImages } from "react-icons/bs";
import { MdSend } from "react-icons/md";

import "./conversation.css";

function Converstaion() {
  const reverse = ["reverse", "chat-reverse"];
  return (
    <div className="conversation">
      <Message />
      <Message direction={reverse} />
      <div className="type-chat">
        <FiLink2 />
        <input type="text" placeholder="Type your message" />
        <BiMicrophone />
        <BsImages />
        <MdSend />
      </div>
    </div>
  );
}

export default Converstaion;
