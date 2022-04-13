import React from "react";
import DashboardHeader from "../dashboardHeader/DashboardHeader.component";
import "./chatsBody.css";
import ChatsBodyContent from "./chatsBodyContent/ChatsBodyContent.component";

function ChatsBody() {
  return (
    <div className="chats--body">
      <DashboardHeader />
      <ChatsBodyContent />
    </div>
  );
}

export default ChatsBody;
