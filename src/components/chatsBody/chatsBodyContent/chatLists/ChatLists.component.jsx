import React from "react";
import { inverDetails } from "../../../../utils/userData";
import UserChat from "../../../userChat/userChat.component";

import "./chatLists.css";

function ChatLists() {
  return (
    <div className="chats-list">
      <h2>Chats</h2>
      {inverDetails.map((data) => {
        return <UserChat key={data.id} data={data} wordLength={25} />;
      })}
    </div>
  );
}

export default ChatLists;
