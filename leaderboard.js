const players = [
    { name: "Nuno (Rhattee) Charnprasertkij", points: 6 },
    { name: "Jaden Cockayne", points: 2 },
    { name: "Malachi Elliott", points: 2 },
    { name: "Isaac Fickett", points: 4 },
    { name: "Levy (Natthadetch) Hengpongthorn", points: 3 },
    { name: "Tonnam (Putthima) Lertwirojkul", points: 2 },
    {
        name: "Nate (Nacin) Limthongkul",
        attendance: 2,
        weeklyPuzzle: 2,
        monthlyPuzzle: 6,
        tournaments: 0
    },
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

//players.forEach(player => {
    //player.points =
        //player.attendance +
        //player.weeklyPuzzle +
        //player.monthlyPuzzle +
        //player.tournaments;
//});

players.forEach(player => {

    // Only calculate the total if this player
    // has the new point breakdown fields.
    if (
        player.attendance !== undefined &&
        player.weeklyPuzzle !== undefined &&
        player.monthlyPuzzle !== undefined &&
        player.tournaments !== undefined
    ) {
        player.points =
            player.attendance +
            player.weeklyPuzzle +
            player.monthlyPuzzle +
            player.tournaments;
    }

});
/* ========================================
   SORT PLAYERS
======================================== */

const rankedPlayers = [...players].sort((a, b) => b.points - a.points);


/* ========================================
   CALCULATE COMPETITION RANKS
   Example:
   10, 10, 8, 7, 7, 5
   becomes:
   1, 1, 3, 4, 4, 6
======================================== */

let previousPoints = null;
let currentRank = 0;

rankedPlayers.forEach((player, index) => {

    if (player.points !== previousPoints) {
        currentRank = index + 1;
    }

    player.rank = currentRank;

    previousPoints = player.points;
});


/* ========================================
   PODIUM
======================================== */

const firstPlace = rankedPlayers.filter(player => player.rank === 1);
const secondPlace = rankedPlayers.filter(player => player.rank === 2);
const thirdPlace = rankedPlayers.filter(player => player.rank === 3);

const firstCard = document.querySelector(".first-place");
const secondCard = document.querySelector(".second-place");
const thirdCard = document.querySelector(".third-place");


function displayPodium(card, players, defaultText) {

    if (!card) return;

    if (players.length === 0) {
        card.querySelector("h2").textContent = defaultText;
        card.querySelector(".podium-points").textContent = "-- Points";
        return;
    }

    const nameElement = card.querySelector("h2");
    const pointsElement = card.querySelector(".podium-points");

    nameElement.innerHTML = players
        .map(player => player.name)
        .join("<br>");

    pointsElement.textContent =
        `${players[0].points} Point${players[0].points === 1 ? "" : "s"}`;
}


displayPodium(firstCard, firstPlace, "Coming Soon");
displayPodium(secondCard, secondPlace, "Coming Soon");
displayPodium(thirdCard, thirdPlace, "Coming Soon");


/* ========================================
   RANKINGS TABLE
======================================== */

const rankingsTable = document.querySelector(".rankings-table");


/*
   Temporary point breakdowns.

   These are currently 0 because your existing
   player data only contains total points.

   Later, you can replace these values with
   the actual breakdown for each player.
*/

const defaultBreakdown = {
    attendance: 0,
    weeklyPuzzle: 0,
    monthlyPuzzle: 0,
    tournaments: 0
};


function createBreakdown(player) {

    const attendance = player.attendance ?? 0;
    const weeklyPuzzle = player.weeklyPuzzle ?? 0;
    const monthlyPuzzle = player.monthlyPuzzle ?? 0;
    const tournaments = player.tournaments ?? 0;

    return `
        <div class="breakdown-item">
            <span>Attendance</span>
            <strong>+${attendance}</strong>
        </div>

        <div class="breakdown-item">
            <span>Weekly Puzzle</span>
            <strong>+${weeklyPuzzle}</strong>
        </div>

        <div class="breakdown-item">
            <span>Monthly Puzzle</span>
            <strong>+${monthlyPuzzle}</strong>
        </div>

        <div class="breakdown-item">
            <span>Tournaments</span>
            <strong>+${tournaments}</strong>
        </div>
    `;
}

/* ========================================
   CREATE EACH PLAYER ROW
======================================== */

rankedPlayers.forEach(player => {

    const row = document.createElement("div");

    row.className = "ranking-player-row";

    row.innerHTML = `
        <div class="ranking-main">

            <div class="ranking-row-rank">
                ${player.rank}
            </div>

            <div class="ranking-row-player">
                ${player.name}
            </div>

            <div class="ranking-row-points">
                ${player.points}
            </div>

            <div class="ranking-expand">
                ›
            </div>

        </div>

        <div class="points-breakdown">
            ${createBreakdown(player)}
        </div>
    `;


    /* ========================================
       CLICK TO EXPAND
    ======================================== */

    row.addEventListener("click", () => {

        const isOpen = row.classList.contains("expanded");

        /*
           Close every other player first.
           This keeps the leaderboard clean.
        */

        document
            .querySelectorAll(".ranking-player-row.expanded")
            .forEach(openRow => {

                if (openRow !== row) {
                    openRow.classList.remove("expanded");
                }

            });


        /*
           Toggle the clicked player.
        */

        row.classList.toggle("expanded", !isOpen);

    });


    rankingsTable.appendChild(row);
});
