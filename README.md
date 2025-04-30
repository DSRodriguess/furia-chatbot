
# FURIA Chatbot

O **FURIA Chatbot** é uma aplicação interativa criada para os fãs do time de CS:GO da FURIA. O bot oferece respostas personalizadas, informações ao vivo sobre jogos, calendário, elenco, gritos de torcida e um quiz divertido para testar seus conhecimentos sobre o time.

## ✨ Funcionalidades

- **📊 Informações ao vivo**: Último resultado, status do jogo atual e próximo confronto.
- **🗓️ Calendário de jogos**: Exibe os próximos jogos da FURIA.
- **🎯 Quiz temático**: Perguntas sobre a história e os jogadores da FURIA.
- **📣 Gritos de torcida**: Frases motivacionais para os fãs.
- **🏆 Ranking e títulos**: Dados atualizados sobre conquistas e posição no ranking.

## 🧪 Demonstração

Confira o vídeo demonstrativo do chatbot em funcionamento:

[🎥 Assistir ao vídeo de apresentação](https://link-do-video.com)

## 🚀 Como executar o projeto

### Pré-requisitos

Você precisa ter o [Node.js](https://nodejs.org/) instalado.

### Passo a passo

```bash
# Clone o repositório
git clone https://github.com/DSRodriguess/furia-chatbot.git

# Acesse a pasta do projeto
cd furia-chatbot

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm start
```

Abra o navegador e acesse: `http://localhost:3000`

## 🧩 Estrutura do Projeto

```
furia-chatbot/
├── public/
├── src/
│   ├── assets/            # Imagens e logos (ex: logo da FURIA)
│   ├── components/        # ChatInput, ChatWindow, MessageBubble
│   ├── utils/             # Lógica de respostas e quiz
│   ├── App.jsx            # Componente principal
│   ├── App.css            # Estilo global
├── README.md
├── package.json
```

## 🧠 Lógica do Chat e Quiz

### 🔁 getBotResponse

Esta função recebe a mensagem do usuário e retorna a resposta apropriada. Pode identificar termos como "último jogo", "próximo jogo", "ranking", "grito", "quiz", entre outros.

```javascript
export default function getBotResponse(message) {
  const msg = message.toLowerCase();

  if (msg.includes("último jogo")) {
    return `🄹 Último jogo: FURIA venceu XYZ...`;
  }

  // Outros comandos personalizados
}
```

### 🎮 Quiz

```javascript
export const quizQuestions = [
  {
    question: "Quem é o IGL da FURIA?",
    options: ["arT", "FalleN", "KSCERATO"],
    correctAnswer: "arT",
  },
  // outras questões
];

export function getQuizQuestion(index) {
  return quizQuestions[index].question;
}

export function checkQuizAnswer(index, answer) {
  const question = quizQuestions[index];
  return {
    correct: answer.toLowerCase() === question.correctAnswer.toLowerCase(),
    message: question.correctAnswer.toLowerCase() === answer.toLowerCase()
      ? "Resposta correta! 🎉"
      : "Resposta errada. Tente novamente! 😅",
  };
}
```

## 🛠 Tecnologias Utilizadas

- [React.js](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [PrimeReact](https://primereact.org/)
- JavaScript (ES6+)
- CSS moderno

## 🤝 Contribuindo

1. Faça um **fork** do repositório
2. Crie sua branch:

```bash
git checkout -b minha-nova-funcionalidade
```

3. Commit suas alterações
4. Envie um pull request 🚀


## 👤 Autor

Desenvolvido por [@DSRodriguess](https://github.com/DSRodriguess)