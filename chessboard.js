const board = document.getElementById("board");

const boardSize = 8;

for (let row = 0; row < boardSize; row++) {

    for (let col = 0; col < boardSize; col++) {

        const square = document.createElement("div");

        square.classList.add("square");

        if ((row + col) % 2 === 0) {
            square.classList.add("light");
        } else {
            square.classList.add("dark");
        }

        board.appendChild(square);

    }

}
