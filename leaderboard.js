const players = [
    { name: "Nuno (Rhattee) Charnprasertkij", points: 0 },
    { name: "Jaden Cockayne", points: 0 },
    { name: "Malachi Elliott", points: 0 },
    { name: "Isaac Fickett", points: 0 },
    { name: "Levy (Natthadetch) Hengpongthorn", points: 0 },
    { name: "Felix (Junyuan) Hu", points: 0 },
    { name: "Tonnam (Putthima) Lertwirojkul", points: 0 },
    { name: "Nate (Nacin) Limthongkul", points: 0 },
    { name: "Aton (Aton) Liu", points: 0 },
    { name: "Anna (Anna) Lo", points: 0 },
    { name: "Micah (Micah) Lo", points: 0 },
    { name: "SolRay (Nanon) Nivataphand", points: 0 },
    { name: "Earng (Ploynapas) Pholsuwanchai", points: 0 },
    { name: "Fenix Plunkett", points: 0 },
    { name: "Ivan (Ivan David) Pulikkan", points: 0 },
    { name: "Leo (Arlyn) Roteseree", points: 0 },
    { name: "Grace (Nattha) Sakdibhornssup", points: 0 },
    { name: "Bohden Sheridan", points: 0 },
    { name: "Pete (Pitchya) Suwankeeree", points: 0 },
    { name: "Penguin (Teetat) Tanakornkul", points: 0 },
    { name: "Jerry (Zhengheng) Wen", points: 0 },
    { name: "Vince (Vincent) Yodpijit", points: 0 }
];

// =========================
// SORT PLAYERS
// =========================

players.sort((a, b) => b.points - a.points);


// =========================
// PODIUM
// =========================

const podiumCards = document.querySelectorAll(".podium-card");

podiumCards[0].querySelector("h2").textContent = players[1]?.name || "Coming Soon";
podiumCards[0].querySelector(".podium-points").textContent =
    players[1] ? `${players[1].points} Points` : "-- Points";

podiumCards[1].querySelector("h2").textContent = players[0]?.name || "Coming Soon";
podiumCards[1].querySelector(".podium-points").textContent =
    players[0] ? `${players[0].points} Points` : "-- Points";

podiumCards[2].querySelector("h2").textContent = players[2]?.name || "Coming Soon";
podiumCards[2].querySelector(".podium-points").textContent =
    players[2] ? `${players[2].points} Points` : "-- Points";


// =========================
// FULL RANKINGS
// =========================

const rankingsTable = document.querySelector(".rankings-table");

players.forEach((player, index) => {

    rankingsTable.innerHTML += `
        <div class="ranking-row-rank">${index + 1}</div>
        <div class="ranking-row-player">${player.name}</div>
        <div class="ranking-row-points">${player.points}</div>
    `;

});
