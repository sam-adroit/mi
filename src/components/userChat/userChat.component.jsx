import React from "react";

import ProfileImg from "../../assets/user.png";

import "./userChat.css";

function UserChat({ data, wordLength }) {
  const { username, client, message, time, unread } = data;
  return (
    <div className="users-chat">
      <div className="user-chat">
        <div className="profile-img">
          <img src={ProfileImg} alt="" />
        </div>
        <div className="chat--user-details">
          <h3>
            {username} <span>{client}</span>
          </h3>
          <p>{wordLength ? message.slice(0, wordLength) + "..." : message}</p>
        </div>
        {unread && (
          <div className="unread-message">
            <p>{unread}</p>
            <p>{time}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default UserChat;
