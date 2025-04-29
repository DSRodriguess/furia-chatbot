// src/data/mockGames.js

export const pastGames = [
    {
      date: "2025-04-25",
      opponent: "NAVI",
      tournament: "ESL Pro League",
      result: "Vitória",
      score: "2-1",
      maps: ["Mirage (16-11)", "Inferno (9-16)", "Overpass (16-14)"]
    },
    {
      date: "2025-04-20",
      opponent: "FaZe Clan",
      tournament: "ESL Pro League",
      result: "Derrota",
      score: "0-2",
      maps: ["Nuke (10-16)", "Anubis (12-16)"]
    }
  ];
  
  export const upcomingGames = [
    {
      date: "2025-04-30",
      time: "17:00",
      opponent: "G2 Esports",
      tournament: "ESL Pro League",
      stage: "Semifinal"
    }
  ];
  
  export const liveGame = {
    isLive: true,
    opponent: "G2 Esports",
    tournament: "ESL Pro League",
    currentMap: "Inferno",
    score: {
      furia: 13,
      opponent: 11
    },
    round: 25,
    status: "2º mapa em andamento"
  };
  