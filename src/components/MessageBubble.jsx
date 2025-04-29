import React from "react";
import furiaLogo from '../assets/furia-logo.png';
import '../App.css';

const MessageBubble = ({ sender, text }) => {
  const isBot = sender === 'bot';

  return (
    <div className={`msg-row ${isBot ? 'left' : 'right'}`}>
      {isBot && <img src={furiaLogo} alt="bot-avatar" className="avatar" />}
      <div className={`msg ${sender}`}>
        {text}
      </div>
    </div>
  );
};

export default MessageBubble;
