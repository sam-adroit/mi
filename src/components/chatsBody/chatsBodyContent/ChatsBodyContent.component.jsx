import React from "react";
import ChatLists from "./chatLists/ChatLists.component";
import Converstaion from "./conversation/Converstaion.component";

import "./chatsBodyContent.css";

function ChatsBodyContent() {
  return (
    <div className="chats-body--content">
      <ChatLists />
      <Converstaion />
    </div>
  );
}

export default ChatsBodyContent;
