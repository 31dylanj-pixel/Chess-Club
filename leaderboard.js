const players = [
    { name: "Dylan J.", points: 17 },
    { name: "Malin", points: 24 },
    { name: "Aliza", points: 12 },
    { name: "John", points: 19 }
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
