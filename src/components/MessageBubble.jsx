import React from "react";
import "../App.css";

const MessageBubble = ({ sender, text }) => {
  const getCurrentTime = () => {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    return `${hours}:${minutes}`;
  };

  return (
    <div className={`msg ${sender}`}>
      <div className="msg-text">{text}</div>
      <div className="msg-time">{getCurrentTime()}</div>
    </div>
  );
};

export default MessageBubble;
