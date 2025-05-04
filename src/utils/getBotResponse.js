import { pastGames, upcomingGames, liveGame } from "../data/mockGames";

export default function getBotResponse(message) {
  const msg = message.toLowerCase();

  if (msg.includes("último jogo")) {
    const game = pastGames[0];
    return `Último jogo: FURIA ${game.result} contra ${game.opponent} por ${game.score} no ${game.tournament}.`;
  }

  if (msg.includes("próximo jogo")) {
    const game = upcomingGames[0];
    return `🗓️ Próximo jogo: FURIA vs ${game.opponent} (${game.tournament}) em ${game.date} às ${game.time}.`;
  }

  if (msg.includes("status ao vivo") || msg.includes("ao vivo")) {
    if (liveGame.isLive) {
      return `🔥 AO VIVO agora: FURIA ${liveGame.score.furia} x ${liveGame.score.opponent} ${liveGame.opponent}\nMapa: ${liveGame.currentMap} (Rodada ${liveGame.round})`;
    } else {
      return "❌ Não há nenhum jogo ao vivo no momento.";
    }
  }

  if (msg.includes("jogadores") || msg.includes("time atual")) {
    return `👥 Elenco atual da FURIA CS:GO:\n• 🧠 FalleN (IGL)\n• 💥 KSCERATO\n• 🔫 yuurih\n• 🧱 chelo\n• 🧮 arT`;
  }

  if (msg.includes("calendário") || msg.includes("próximos jogos")) {
    return upcomingGames.map(game => `🕡 ${game.date} - FURIA vs ${game.opponent} (${game.tournament}) às ${game.time}`).join("\n");
  }

  if (msg.includes("grito") || msg.includes("torcida")) {
    const frases = [
      "🔪 VAI PRA CIMA DELES, FURIA!",
      "🔥 #DIADEFURIA",
      "🌟 ACREDITA, FÃ! A VITÓRIA É NOSSA!"
    ];
    const random = frases[Math.floor(Math.random() * frases.length)];
    return random;
  }

  if (msg.includes("ranking") || msg.includes("posição")) {
    return `📊 A FURIA está atualmente em 6º lugar no ranking mundial da HLTV e nas semifinais do ESL Pro League.`;
  }

  if (msg.includes("títulos") || msg.includes("história")) {
    return `🏆 Títulos importantes:\n• DreamHack Open Rio 2019\n• CBCS Finals 2020\n• Elisa Invitational 2021\n• Top 3 no IEM Rio Major 2022`;
  }

  if (msg.includes("quiz") || msg.includes("pergunta")) {
    return `🎯 Quiz: Qual jogador da FURIA é conhecido como IGL e foi destaque na LG/SK?\nA) arT\nB) KSCERATO\nC) FalleN`;
  }

  // 🔁 Respostas simples (que estavam no responses.js)
  if (msg.includes("furia")) {
    return "FURIA é um dos maiores times de CS:GO do Brasil! 🇧🇷🔥";
  }

  if (msg.includes("cs")) {
    return "O time de CS da FURIA está sempre competindo nos maiores campeonatos.";
  }

  return "😅 Não entendi. Tente perguntar sobre o elenco, próximos jogos, ranking ou mande um grito de torcida!";
}
