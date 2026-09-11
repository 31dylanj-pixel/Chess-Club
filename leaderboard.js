const players = [
    { name: "Nuno (Rhattee) Charnprasertkij", points: 6 },
    { name: "Jaden Cockayne", points: 2 },
    { name: "Malachi Elliott", points: 2 },
    { name: "Isaac Fickett", points: 4 },
    { name: "Levy (Natthadetch) Hengpongthorn", points: 3 },
    { name: "Tonnam (Putthima) Lertwirojkul", points: 2 },
    { name: "Nate (Nacin) Limthongkul", points: 10 },
    { name: "Aton (Aton) Liu", points: 2 },
    { name: "Anna (Anna) Lo", points: 3 },
    { name: "Micah (Micah) Lo", points: 2 },
    { name: "SolRay (Nanon) Nivataphand", points: 7 },
    { name: "Earng (Ploynapas) Pholsuwanchai", points: 1 },
    { name: "Fenix Plunkett", points: 9 },
    { name: "Ivan (Ivan David) Pulikkan", points: 4 },
    { name: "Leo (Arlyn) Roteseree", points: 3 },
    { name: "Grace (Nattha) Sakdibhornssup", points: 8 },
    { name: "Bohden Sheridan", points: 3 },
    { name: "Pete (Pitchya) Suwankeeree", points: 7 },
    { name: "Penguin (Teetat) Tanakornkul", points: 2 },
    { name: "Jerry (Zhengheng) Wen", points: 3 },
    { name: "Vince (Vincent) Yodpijit", points: 9 }
];

// =========================
// SORT PLAYERS
// =========================

players.sort((a, b) => b.points - a.points);


// =========================
// PODIUM
// =========================

const podiumCards = document.querySelectorAll(".podium-card");

podiumCards[0].querySelector("h2").textContent =
    players[1]?.name || "Coming Soon";

podiumCards[0].querySelector(".podium-points").textContent =
    players[1] ? `${players[1].points} Points` : "-- Points";


podiumCards[1].querySelector("h2").textContent =
    players[0]?.name || "Coming Soon";

podiumCards[1].querySelector(".podium-points").textContent =
    players[0] ? `${players[0].points} Points` : "-- Points";


podiumCards[2].querySelector("h2").textContent =
    players[2]?.name || "Coming Soon";

podiumCards[2].querySelector(".podium-points").textContent =
    players[2] ? `${players[2].points} Points` : "-- Points";


// =========================
// FULL RANKINGS
// =========================

const rankingsTable = document.querySelector(".rankings-table");

let previousPoints = null;
let currentRank = 0;

players.forEach((player, index) => {

    if (player.points !== previousPoints) {
        currentRank = index + 1;
    }

    const row = document.createElement("div");
    row.className = "ranking-player-row";

    row.innerHTML = `
        <div class="ranking-row-rank">${currentRank}</div>

        <div class="ranking-row-player">
            ${player.name}

            <button class="points-dropdown-btn" type="button">
                <span>View Points</span>
                <span class="dropdown-arrow">▼</span>
            </button>

            <div class="points-breakdown">
                <div>
                    <span>Attendance</span>
                    <strong>--</strong>
                </div>

                <div>
                    <span>Puzzle of the Week</span>
                    <strong>--</strong>
                </div>

                <div>
                    <span>Monthly Puzzle</span>
                    <strong>--</strong>
                </div>

                <div>
                    <span>Tournaments</span>
                    <strong>--</strong>
                </div>
            </div>
        </div>

        <div class="ranking-row-points">
            ${player.points}
        </div>
    `;

    rankingsTable.appendChild(row);

    const dropdownButton = row.querySelector(".points-dropdown-btn");
    const breakdown = row.querySelector(".points-breakdown");

    dropdownButton.addEventListener("click", () => {
        breakdown.classList.toggle("open");
        dropdownButton.classList.toggle("open");
    });

    previousPoints = player.points;
});
