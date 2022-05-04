import React from "react";
import { useNavigate } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import Converstaion from "../../components/chatsBody/chatsBodyContent/conversation/Converstaion.component";
import "./ChatDetails.css";

function ChatDetails() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="conversation-header">
        <span onClick={() => navigate("/chats")}>
          <BsArrowLeft />
        </span>
        <h2>John Buyan</h2>
      </div>
      <Converstaion />
    </div>
  );
}

export default ChatDetails;
