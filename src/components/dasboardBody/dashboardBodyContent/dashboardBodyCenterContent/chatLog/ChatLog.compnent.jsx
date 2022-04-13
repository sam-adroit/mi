import React from "react";
import { inverDetails } from "../../../../../utils/userData";
import UserChat from "../../../../userChat/userChat.component";
import { BsArrowRight } from "react-icons/bs";
import "./chatLog.css";

function ChatLog() {
  return (
    <div className="chat-log">
      <h2>Chats</h2>
      {inverDetails.slice(0, 3).map((data) => (
        <UserChat key={data.id} data={data} />
      ))}

      <p>
        See all chats
        <BsArrowRight className="arrow" />
      </p>
    </div>
  );
}

export default ChatLog;
