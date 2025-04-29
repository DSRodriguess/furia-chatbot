import React, { useState } from 'react';
import ChatWindow from './components/ChatWindow';
import ChatInput from './components/ChatInput';
import './App.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

import getBotResponse from './utils/getBotResponse';
import { quizQuestions, getQuizQuestion, checkQuizAnswer } from './utils/quizLogic';

function App() {
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Salve, fã da FURIA! Manda sua pergunta aí!' },
  ]);
  const [input, setInput] = useState('');
  const [isQuizActive, setIsQuizActive] = useState(false);
  const [quizIndex, setQuizIndex] = useState(0);
  const [quizScore, setQuizScore] = useState(0);

  const handleSend = () => {
    if (!input.trim()) return;
    const userMessage = { sender: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);

    // Quiz ativo? Verifica a resposta
    if (isQuizActive) {
      const result = checkQuizAnswer(quizIndex, input);
      setMessages(prev => [...prev, { sender: 'bot', text: result.message }]);

      if (result.correct) setQuizScore(prev => prev + 1);

      const nextIndex = quizIndex + 1;
      if (nextIndex < quizQuestions.length) {
        const nextQuestion = getQuizQuestion(nextIndex);
        setMessages(prev => [...prev, { sender: 'bot', text: nextQuestion }]);
        setQuizIndex(nextIndex);
      } else {
        setMessages(prev => [...prev, {
          sender: 'bot',
          text: `🏁 Fim do quiz! Você acertou ${quizScore + (result.correct ? 1 : 0)} de ${quizQuestions.length}. Parabéns! 🎉`,
        }]);
        setIsQuizActive(false);
        setQuizIndex(0);
        setQuizScore(0);
      }

      setInput('');
      return;
    }

    // Começar quiz
    if (input.toLowerCase().includes('quiz')) {
      setIsQuizActive(true);
      setQuizIndex(0);
      setQuizScore(0);
      setMessages(prev => [
        ...prev,
        { sender: 'bot', text: '🎯 Quiz iniciado! Responda com A, B ou C!' },
        { sender: 'bot', text: getQuizQuestion(0) },
      ]);
      setInput('');
      return;
    }

    // 💬 Lógica padrão do chatbot
    const botReply = getBotResponse(input);

    setMessages(prev => [...prev, { sender: 'bot', text: botReply }]);
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
