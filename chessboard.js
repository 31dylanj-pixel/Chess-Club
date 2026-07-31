const board = document.getElementById("board");

board.innerHTML = "";

const pieces = {

    e2: "wp.svg"

};


const files = ["a","b","c","d","e","f","g","h"];


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


        if (pieces[position]) {

            const piece = document.createElement("img");

            piece.src = `pieces/${pieces[position]}`;
            
            piece.classList.add("piece");
            
            square.appendChild(piece);

        }


        board.appendChild(square);

    }

}
