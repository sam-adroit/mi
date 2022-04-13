import React from "react";
import ChatsBody from "../../components/chatsBody/ChatsBody.component";
import Sidebar from "../../components/sidebar/Sidebar.component";

import "./chats.css";

function Chats() {
  return (
    <div className="chats">
      <Sidebar />
      <ChatsBody />
    </div>
  );
}

export default Chats;
