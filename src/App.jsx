// src/App.jsx
import React, { useState } from 'react';
import ChatWindow from './components/ChatWindow';
import ChatInput from './components/ChatInput';
import './App.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import mockResponses from './data/responses';

function App() {
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Salve, fã da FURIA! Manda sua pergunta aí!' },
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;
    const userMessage = { sender: 'user', text: input };

    const botResponse = Object.entries(mockResponses).find(([keyword]) =>
      input.toLowerCase().includes(keyword)
    );

    const botMessage = {
      sender: 'bot',
      text: botResponse ? botResponse[1] : 'Não entendi 😅 Tente perguntar de outro jeito!',
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
