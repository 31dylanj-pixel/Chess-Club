const board = document.getElementById("board");

board.innerHTML = "";

let currentPieces = {};


function loadBoard(pieces) {

    currentPieces = pieces;

    drawBoard();

}

const files = ["a", "b", "c", "d", "e", "f", "g", "h"];

for (let row = 0; row < 8; row++) {

    for (let col = 0; col < 8; col++) {

        const square = document.createElement("div");

        square.classList.add("square");

        if ((row + col) % 2 === 0) {
            square.classList.add("light");
        } else {
            square.classList.add("dark");
        }

        const position = files[col] + (8 - row);
        const rank = 8 - row;
        const file = files[col];

        if (pieces[position]) {

            const piece = document.createElement("img");

            piece.src = `pieces/${pieces[position]}`;

            piece.classList.add("piece");

            square.appendChild(piece);

        }

        if (col === 0) {

            const rankLabel = document.createElement("span");

            rankLabel.classList.add("rank-label");

            rankLabel.textContent = rank;

            rankLabel.style.color =
                square.classList.contains("light")
                    ? "#b58863"
                    : "#f0d9b5";

            square.appendChild(rankLabel);

        }

        if (row === 7) {

            const fileLabel = document.createElement("span");

            fileLabel.classList.add("file-label");

            fileLabel.textContent = file;

            fileLabel.style.color =
                square.classList.contains("light")
                    ? "#b58863"
                    : "#f0d9b5";

            square.appendChild(fileLabel);

        }

        board.appendChild(square);

    }

}
