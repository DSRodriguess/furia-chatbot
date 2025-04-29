// src/App.jsx
import React, { useState } from 'react';
import ChatWindow from './components/ChatWindow';
import ChatInput from './components/ChatInput';
import './App.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

import getBotResponse from './utils/getBotResponse';

function App() {
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Salve, fã da FURIA! Manda sua pergunta aí!' },
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;
    const userMessage = { sender: 'user', text: input };

    const botMessage = {
      sender: 'bot',
      text: getBotResponse(input),
    };

    setMessages([...messages, userMessage, botMessage]);
    setInput('');
  };

  return (
    <div className="chat-container">
      <h2>🐾 FURIA Chatbot</h2>
      <ChatWindow messages={messages} />
      <ChatInput input={input} setInput={setInput} handleSend={handleSend} />
    </div>
  );
}

export default App;
