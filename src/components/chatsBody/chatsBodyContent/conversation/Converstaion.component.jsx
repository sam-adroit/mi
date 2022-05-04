import React from "react";
import { useNavigate } from "react-router-dom";
import Message from "./message/Message.component";
import { FiLink2 } from "react-icons/fi";
import { BiMicrophone } from "react-icons/bi";
import { BsImages } from "react-icons/bs";
import { MdSend } from "react-icons/md";

import "./conversation.css";

function Converstaion() {
  const navigate = useNavigate();
  const reverse = ["reverse", "chat-reverse"];
  return (
    <div
      className="conversation"
      onClick={() => {
        window.innerWidth <= 600 && navigate("/chats/details");
      }}
    >
      <div className="chat-messages">
        <Message />
        <Message direction={reverse} />
      </div>
      <div className="type-chat">
        <FiLink2 className="chat-ic" />
        <input type="text" placeholder="Type your message" />
        <BiMicrophone className="chat-ic" />
        <BsImages className="chat-ic" />
        <MdSend className="chat-ic send" />
      </div>
    </div>
  );
}

export default Converstaion;
