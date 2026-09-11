const players = [
    { 
        name: "Nuno (Rhattee) Charnprasertkij", 
        attendance: 3,
        weeklyPuzzle: 3,
        monthlyPuzzle: 0,
        tournaments: 0
    },
    { 
        name: "Jaden Cockayne", 
        attendance: 2,
        weeklyPuzzle: 0,
        monthlyPuzzle: 0,
        tournaments: 0 
    },
    { 
        name: "Malachi Elliott", 
        attendance: 2,
        weeklyPuzzle: 0,
        monthlyPuzzle: 0,
        tournaments: 0
    },
    { 
        name: "Isaac Fickett",
        attendance: 3,
        weeklyPuzzle: 1,
        monthlyPuzzle: 0,
        tournaments: 0
    },
    { 
        name: "Levy (Natthadetch) Hengpongthorn",
        attendance: 2,
        weeklyPuzzle: 1,
        monthlyPuzzle: 0,
        tournaments: 0
    },
    { 
        name: "Tonnam (Putthima) Lertwirojkul",
        attendance: 2,
        weeklyPuzzle: 0,
        monthlyPuzzle: 0,
        tournaments: 0
    },
    {
        name: "Nate (Nacin) Limthongkul",
        attendance: 3,
        weeklyPuzzle: 1,
        monthlyPuzzle: 6,
        tournaments: 0
    },
    { 
        name: "Aton (Aton) Liu", 
        attendance: 2,
        weeklyPuzzle: 0,
        monthlyPuzzle: 0,
        tournaments: 0
    },
    { 
        name: "Anna (Anna) Lo",
        attendance: 2,
        weeklyPuzzle: 1,
        monthlyPuzzle: 0,
        tournaments: 0
    },
    { 
        name: "Micah (Micah) Lo",
        attendance: 2,
        weeklyPuzzle: 0,
        monthlyPuzzle: 0,
        tournaments: 0
    },
    { 
        name: "SolRay (Nanon) Nivataphand", 
        attendance: 3,
        weeklyPuzzle: 4,
        monthlyPuzzle: 0,
        tournaments: 0
    },
    { 
        name: "Fenix Plunkett", 
        attendance: 3,
        weeklyPuzzle: 5,
        monthlyPuzzle: 1,
        tournaments: 0
    },
    { 
        name: "Ivan (Ivan David) Pulikkan", 
        attendance: 3,
        weeklyPuzzle: 1,
        monthlyPuzzle: 0,
        tournaments: 0
    },
    { 
        name: "Leo (Arlyn) Roteseree", 
        attendance: 1,
        weeklyPuzzle: 0,
        monthlyPuzzle: 2,
        tournaments: 0
    },
    { 
        name: "Grace (Nattha) Sakdibhornssup", 
        attendance: 2,
        weeklyPuzzle: 3,
        monthlyPuzzle: 4,
        tournaments: 0
    },
    { 
        name: "Bohden Sheridan",
        attendance: 3,
        weeklyPuzzle: 0,
        monthlyPuzzle: 0,
        tournaments: 0
    },
    { 
        name: "Pete (Pitchya) Suwankeeree", 
        attendance: 2,
        weeklyPuzzle: 0,
        monthlyPuzzle: 5,
        tournaments: 0
    },
    { 
        name: "Penguin (Teetat) Tanakornkul",
        attendance: 2,
        weeklyPuzzle: 0,
        monthlyPuzzle: 0,
        tournaments: 0
    },
    { 
        name: "Jerry (Zhengheng) Wen", 
        attendance: 3,
        weeklyPuzzle: 0,
        monthlyPuzzle: 0,
        tournaments: 0
    },
    { 
        name: "Vince (Vincent) Yodpijit", 
        attendance: 3,
        weeklyPuzzle: 3,
        monthlyPuzzle: 3,
        tournaments: 0
    }
];

players.forEach(player => {

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


displayPodium(firstCard, firstPlace, "None");
displayPodium(secondCard, secondPlace, "None");
displayPodium(thirdCard, thirdPlace, "None");


/* ========================================
   RANKINGS TABLE
======================================== */

const rankingsTable = document.querySelector(".rankings-table");

if (rankingsTable) {

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

        row.addEventListener("click", () => {

            const isOpen = row.classList.contains("expanded");

            document
                .querySelectorAll(".ranking-player-row.expanded")
                .forEach(openRow => {

                    if (openRow !== row) {
                        openRow.classList.remove("expanded");
                    }

                });

            row.classList.toggle("expanded", !isOpen);

        });

        rankingsTable.appendChild(row);

    });

}


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

// ========================================
// HOMEPAGE TOP 3
// ========================================

const topThreeContainer = document.getElementById("top-three");

if (topThreeContainer) {

    const topThreeRanks = [1, 2, 3];

    const medals = ["🥇", "🥈", "🥉"];

    topThreeContainer.innerHTML = "";

    topThreeRanks.forEach((rank, index) => {

        const playersAtRank = rankedPlayers.filter(
            player => player.rank === rank
        );

        const playerElement = document.createElement("div");

        playerElement.className = "top-player";

        if (playersAtRank.length === 0) {

            playerElement.innerHTML = `
                <span class="top-rank">
                    ${medals[index]}
                </span>

                <span class="top-name">
                    None
                </span>

                <strong>
                    --
                </strong>
            `;

        } else {

            playerElement.innerHTML = `
                <span class="top-rank">
                    ${medals[index]}
                </span>

                <span class="top-name">
                    ${playersAtRank
                        .map(player => player.name)
                        .join("<br>")}
                </span>

                <strong>
                    ${playersAtRank[0].points}
                </strong>
            `;

        }

        topThreeContainer.appendChild(playerElement);

    });

}
