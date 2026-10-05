/* =========================================================
   CHESS BOARD
   Handles rendering and interaction
========================================================= */


/* =========================================================
   PIECE SYMBOLS
========================================================= */

const PIECE_SYMBOLS = {

    white: {
        pawn: "♙",
        rook: "♖",
        knight: "♘",
        bishop: "♗",
        queen: "♕",
        king: "♔"
    },

    black: {
        pawn: "♟",
        rook: "♜",
        knight: "♞",
        bishop: "♝",
        queen: "♛",
        king: "♚"
    }

};


/* =========================================================
   STARTING BOARD
========================================================= */

function createStartingBoard() {

    return [

        [
            { type: "rook",   color: "black" },
            { type: "knight", color: "black" },
            { type: "bishop", color: "black" },
            { type: "queen",  color: "black" },
            { type: "king",   color: "black" },
            { type: "bishop", color: "black" },
            { type: "knight", color: "black" },
            { type: "rook",   color: "black" }
        ],

        [
            { type: "pawn", color: "black" },
            { type: "pawn", color: "black" },
            { type: "pawn", color: "black" },
            { type: "pawn", color: "black" },
            { type: "pawn", color: "black" },
            { type: "pawn", color: "black" },
            { type: "pawn", color: "black" },
            { type: "pawn", color: "black" }
        ],

        [
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null
        ],

        [
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null
        ],

        [
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null
        ],

        [
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null
        ],

        [
            { type: "pawn", color: "white" },
            { type: "pawn", color: "white" },
            { type: "pawn", color: "white" },
            { type: "pawn", color: "white" },
            { type: "pawn", color: "white" },
            { type: "pawn", color: "white" },
            { type: "pawn", color: "white" },
            { type: "pawn", color: "white" }
        ],

        [
            { type: "rook",   color: "white" },
            { type: "knight", color: "white" },
            { type: "bishop", color: "white" },
            { type: "queen",  color: "white" },
            { type: "king",   color: "white" },
            { type: "bishop", color: "white" },
            { type: "knight", color: "white" },
            { type: "rook",   color: "white" }
        ]

    ];

}


/* =========================================================
   CHESSBOARD CLASS
========================================================= */

class ChessBoard {

    constructor(element) {

        this.element = element;

        this.board =
            createStartingBoard();

        this.selectedSquare = null;

        this.legalMoves = [];

        this.onMove = null;

        this.render();

    }


    /* =====================================================
       RENDER BOARD
    ===================================================== */

    render() {

        this.element.innerHTML = "";


        for (
            let row = 0;
            row < 8;
            row++
        ) {

            for (
                let col = 0;
                col < 8;
                col++
            ) {

                const square =
                    document.createElement("button");

                square.type = "button";

                square.className = "chess-square";


                /* -----------------------------------------
                   Board colors
                ----------------------------------------- */

                if ((row + col) % 2 === 0) {

                    square.classList.add(
                        "light-square"
                    );

                } else {

                    square.classList.add(
                        "dark-square"
                    );

                }


                square.dataset.row = row;
                square.dataset.col = col;


                /* -----------------------------------------
                   Selected square
                ----------------------------------------- */

                if (
                    this.selectedSquare &&
                    this.selectedSquare.row === row &&
                    this.selectedSquare.col === col
                ) {

                    square.classList.add(
                        "selected"
                    );

                }


                /* -----------------------------------------
                   Legal move
                ----------------------------------------- */

                const isLegalMove =
                    this.legalMoves.some(
                        move =>
                            move.row === row &&
                            move.col === col
                    );


                if (isLegalMove) {

                    square.classList.add(
                        "legal-move"
                    );

                }


                /* -----------------------------------------
                   Piece
                ----------------------------------------- */

                const piece =
                    this.board[row][col];


                if (piece) {

                    const pieceElement =
                        document.createElement("span");

                    pieceElement.className =
                        `chess-piece ${piece.color}`;

                    pieceElement.textContent =
                        PIECE_SYMBOLS[
                            piece.color
                        ][
                            piece.type
                        ];

                    square.appendChild(
                        pieceElement
                    );

                }


                square.addEventListener(
                    "click",
                    () => {

                        this.handleSquareClick(
                            row,
                            col
                        );

                    }
                );


                this.element.appendChild(
                    square
                );

            }

        }

    }


    /* =====================================================
       HANDLE SQUARE CLICK
    ===================================================== */

    handleSquareClick(row, col) {

        const clickedPiece =
            this.board[row][col];


        /* -----------------------------------------
           No piece selected
        ----------------------------------------- */

        if (!this.selectedSquare) {

            if (!clickedPiece) {
                return;
            }


            this.selectSquare(
                row,
                col
            );

            return;

        }


        /* -----------------------------------------
           Clicking selected square
        ----------------------------------------- */

        if (
            this.selectedSquare.row === row &&
            this.selectedSquare.col === col
        ) {

            this.clearSelection();

            return;

        }


        /* -----------------------------------------
           Click another friendly piece
        ----------------------------------------- */

        if (
            clickedPiece &&
            clickedPiece.color ===
                this.board[
                    this.selectedSquare.row
                ][
                    this.selectedSquare.col
                ].color
        ) {

            this.selectSquare(
                row,
                col
            );

            return;

        }


        /* -----------------------------------------
           Try to move
        ----------------------------------------- */

        const isLegal =
            this.legalMoves.some(
                move =>
                    move.row === row &&
                    move.col === col
            );


        if (!isLegal) {

            return;

        }


        this.movePiece(
            this.selectedSquare.row,
            this.selectedSquare.col,
            row,
            col
        );

    }


    /* =====================================================
       SELECT PIECE
    ===================================================== */

    selectSquare(row, col) {

        this.selectedSquare = {
            row,
            col
        };


        this.legalMoves =
            getLegalMoves(
                this.board,
                row,
                col
            );


        this.render();

    }


    /* =====================================================
       CLEAR SELECTION
    ===================================================== */

    clearSelection() {

        this.selectedSquare = null;

        this.legalMoves = [];

        this.render();

    }


    /* =====================================================
       MOVE PIECE
    ===================================================== */

    movePiece(
        fromRow,
        fromCol,
        toRow,
        toCol
    ) {

        const piece =
            this.board[
                fromRow
            ][
                fromCol
            ];

        const capturedPiece =
            this.board[
                toRow
            ][
                toCol
            ];


        this.board[
            toRow
        ][
            toCol
        ] = piece;


        this.board[
            fromRow
        ][
            fromCol
        ] = null;


        this.selectedSquare = null;

        this.legalMoves = [];


        this.render();


        /* -----------------------------------------
           Notify lesson system
        ----------------------------------------- */

        if (typeof this.onMove === "function") {

            this.onMove({

                piece,

                capturedPiece,

                from: {
                    row: fromRow,
                    col: fromCol
                },

                to: {
                    row: toRow,
                    col: toCol
                }

            });

        }

    }


    /* =====================================================
       RESET BOARD
    ===================================================== */

    reset() {

        this.board =
            createStartingBoard();

        this.selectedSquare = null;

        this.legalMoves = [];

        this.render();

    }

}
