// src/components/ChatWindow.jsx
import React from 'react';
import MessageBubble from './MessageBubble';

const ChatWindow = ({ messages }) => {
    return (
        <div className="chat-box">
            {messages.map((msg, idx) => (
                <MessageBubble key={idx} sender={msg.sender} text={msg.text} />
            ))}
        </div>
    );
};

export default ChatWindow;
