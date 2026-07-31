let currentPieces = {};

let currentHighlights = [];

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

            if (
                currentHighlights &&
                currentHighlights.includes(position)
            ) {
            
                square.classList.add("highlight");
            
            }
            const rank = 8 - row;

            const file = files[col];


            // PIECES
            if (currentPieces[position]) {

                const piece = document.createElement("img");
            
                piece.src = `pieces/${currentPieces[position]}`;
            
                piece.classList.add("piece");
            
                piece.draggable = true;
            
            
                piece.addEventListener("dragstart", (e) => {
            
                    e.dataTransfer.setData(
                        "from",
                        position
                    );
            
                });
            
            
                square.appendChild(piece);
            
            }



            // RANK LABELS
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



            // FILE LABELS
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

            square.addEventListener("dragover", (e) => {

                e.preventDefault();
            
            });
            
            
            square.addEventListener("drop", (e) => {
            
                e.preventDefault();
            
            
                const from =
                    e.dataTransfer.getData("from");
            
            
                handleMove(
                    from,
                    position
                );
            
            });
        }

    }

}

function handleMove(from, to) {


    const step = lessonSteps[currentStep];


    // only allow king movement

    if (!step.target) {

        return;

    }


    const movingPiece =
        step.pieces[from];


    if (!movingPiece) {

        return;

    }


    // move king

    if (movingPiece === "wk.svg") {


        step.pieces[to] = "wk.svg";


        delete step.pieces[from];


        // captured target

        if (to === step.target) {


            currentStep++;


            loadStep();


        }

        else {


            loadBoard(
                step.pieces,
                step.highlights || []
            );

        }

    }

}
