let currentPieces = {};

let currentHighlights = [];

let selectedSquare = null;


function loadBoard(pieces, highlights = []) {

    currentPieces = pieces;

    currentHighlights = highlights;

    drawBoard();

}


function drawBoard() {

    const board = document.getElementById("board");

    board.innerHTML = "";

    const files = [
        "a","b","c","d",
        "e","f","g","h"
    ];


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


            if (
                currentHighlights &&
                currentHighlights.includes(position)
            ) {

                square.classList.add("highlight");

            }


            if (selectedSquare === position) {

                square.classList.add("selected");

            }


            // PIECE

            if (currentPieces[position]) {

                const piece = document.createElement("img");

                piece.src =
                    `pieces/${currentPieces[position]}`;

                piece.classList.add("piece");

                square.appendChild(piece);

            }


            // CLICK

            square.addEventListener("click", () => {

                handleSquareClick(position);

            });


            // RANK LABEL

            if (col === 0) {

                const rankLabel =
                    document.createElement("span");

                rankLabel.classList.add("rank-label");

                rankLabel.textContent = rank;

                rankLabel.style.color =
                    square.classList.contains("light")
                        ? "#b58863"
                        : "#f0d9b5";

                square.appendChild(rankLabel);

            }


            // FILE LABEL

            if (row === 7) {

                const fileLabel =
                    document.createElement("span");

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

}


function handleSquareClick(position) {

    if (!window.boardInteractive) {
        return;
    }

    // first click = select piece

    if (!selectedSquare) {

        if (currentPieces[position]) {

            selectedSquare = position;

            drawBoard();

        }

        return;

    }


    // clicking same square deselects

    if (selectedSquare === position) {

        selectedSquare = null;

        drawBoard();

        return;

    }


    // second click = move

    if (window.onBoardMove) {

        window.onBoardMove(
            selectedSquare,
            position
        );

    }


    selectedSquare = null;

    drawBoard();

}
