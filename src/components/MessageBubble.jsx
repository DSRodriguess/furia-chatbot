import React from "react";
import '../App.css'; // Corrigido: volta uma pasta para acessar o App.css

const MessageBubble = ({ sender, text }) => {
  return (
    <div className={`msg ${sender}`}>
      {text}
    </div>
  );
};

export default MessageBubble;
