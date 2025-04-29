export const quizQuestions = [
    {
      question: "Qual jogador da FURIA é conhecido como IGL e foi destaque na LG/SK?",
      options: ["A) arT", "B) KSCERATO", "C) FalleN"],
      answer: "C",
    },
    {
      question: "Qual torneio a FURIA venceu em 2019?",
      options: ["A) IEM Katowice", "B) DreamHack Open Rio", "C) CBCS Finals"],
      answer: "B",
    },
    {
      question: "Qual jogador da FURIA é conhecido por seu estilo agressivo?",
      options: ["A) arT", "B) chelo", "C) yuurih"],
      answer: "A",
    },
  ];
  
  export function getQuizQuestion(index) {
    const quiz = quizQuestions[index];
    return `🎯 Pergunta ${index + 1}: ${quiz.question}\n${quiz.options.join("\n")}`;
  }
  
  export function checkQuizAnswer(index, userInput) {
    const quiz = quizQuestions[index];
    const cleanInput = userInput.trim().toUpperCase();
  
    if (cleanInput === quiz.answer) {
      return { correct: true, message: "✅ Acertou! Boa, fã da FURIA! \ud83c\udf1f" };
    } else {
      return {
        correct: false,
        message: `❌ Quase! A resposta certa era ${quiz.answer}) ${quiz.options.find(o => o.startsWith(quiz.answer))?.slice(3)}.`,
      };
    }
  }
  