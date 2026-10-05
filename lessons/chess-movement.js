/* =========================================================
   CHESS MOVEMENT ENGINE
   Single source of truth for piece movement
========================================================= */


/* =========================================================
   BOARD COORDINATES

   Rows:
   0 = rank 8
   1 = rank 7
   ...
   7 = rank 1

   Columns:
   0 = a
   1 = b
   ...
   7 = h
========================================================= */


/* =========================================================
   BASIC HELPERS
========================================================= */

function isInsideBoard(row, col) {

    return (
        row >= 0 &&
        row < 8 &&
        col >= 0 &&
        col < 8
    );

}


function getPiece(board, row, col) {

    if (!isInsideBoard(row, col)) {
        return null;
    }

    return board[row][col];

}


function isEmpty(board, row, col) {

    return getPiece(board, row, col) === null;

}


function isOpponentPiece(board, row, col, color) {

    const piece =
        getPiece(board, row, col);

    return (
        piece !== null &&
        piece.color !== color
    );

}


/* =========================================================
   PATH CHECKING

   Used by:
   - Rook
   - Bishop
   - Queen
========================================================= */

function isPathClear(
    board,
    fromRow,
    fromCol,
    toRow,
    toCol
) {

    const rowStep =
        Math.sign(toRow - fromRow);

    const colStep =
        Math.sign(toCol - fromCol);

    let row =
        fromRow + rowStep;

    let col =
        fromCol + colStep;


    while (
        row !== toRow ||
        col !== toCol
    ) {

        if (!isEmpty(board, row, col)) {
            return false;
        }

        row += rowStep;
        col += colStep;

    }

    return true;

}


/* =========================================================
   PAWN
========================================================= */

function isValidPawnMove(
    board,
    fromRow,
    fromCol,
    toRow,
    toCol,
    color
) {

    const direction =
        color === "white"
            ? -1
            : 1;

    const startRow =
        color === "white"
            ? 6
            : 1;


    const rowDifference =
        toRow - fromRow;

    const colDifference =
        toCol - fromCol;


    /* -----------------------------------------
       ONE SQUARE FORWARD
    ----------------------------------------- */

    if (
        colDifference === 0 &&
        rowDifference === direction &&
        isEmpty(board, toRow, toCol)
    ) {

        return true;

    }


    /* -----------------------------------------
       TWO SQUARES FROM STARTING POSITION
    ----------------------------------------- */

    if (
        colDifference === 0 &&
        fromRow === startRow &&
        rowDifference === direction * 2 &&
        isEmpty(
            board,
            fromRow + direction,
            fromCol
        ) &&
        isEmpty(board, toRow, toCol)
    ) {

        return true;

    }


    /* -----------------------------------------
       DIAGONAL CAPTURE
    ----------------------------------------- */

    if (
        Math.abs(colDifference) === 1 &&
        rowDifference === direction &&
        isOpponentPiece(
            board,
            toRow,
            toCol,
            color
        )
    ) {

        return true;

    }


    return false;

}


/* =========================================================
   ROOK
========================================================= */

function isValidRookMove(
    board,
    fromRow,
    fromCol,
    toRow,
    toCol,
    color
) {

    const sameRow =
        fromRow === toRow;

    const sameColumn =
        fromCol === toCol;


    if (!sameRow && !sameColumn) {
        return false;
    }


    if (
        !isPathClear(
            board,
            fromRow,
            fromCol,
            toRow,
            toCol
        )
    ) {

        return false;

    }


    const destination =
        getPiece(
            board,
            toRow,
            toCol
        );


    return (
        destination === null ||
        destination.color !== color
    );

}


/* =========================================================
   KNIGHT
========================================================= */

function isValidKnightMove(
    board,
    fromRow,
    fromCol,
    toRow,
    toCol,
    color
) {

    const rowDifference =
        Math.abs(toRow - fromRow);

    const colDifference =
        Math.abs(toCol - fromCol);


    const isLShape =
        (
            rowDifference === 2 &&
            colDifference === 1
        ) ||
        (
            rowDifference === 1 &&
            colDifference === 2
        );


    if (!isLShape) {
        return false;
    }


    const destination =
        getPiece(
            board,
            toRow,
            toCol
        );


    return (
        destination === null ||
        destination.color !== color
    );

}


/* =========================================================
   BISHOP
========================================================= */

function isValidBishopMove(
    board,
    fromRow,
    fromCol,
    toRow,
    toCol,
    color
) {

    const rowDifference =
        Math.abs(toRow - fromRow);

    const colDifference =
        Math.abs(toCol - fromCol);


    if (
        rowDifference !== colDifference ||
        rowDifference === 0
    ) {

        return false;

    }


    if (
        !isPathClear(
            board,
            fromRow,
            fromCol,
            toRow,
            toCol
        )
    ) {

        return false;

    }


    const destination =
        getPiece(
            board,
            toRow,
            toCol
        );


    return (
        destination === null ||
        destination.color !== color
    );

}


/* =========================================================
   QUEEN
========================================================= */

function isValidQueenMove(
    board,
    fromRow,
    fromCol,
    toRow,
    toCol,
    color
) {

    const rowDifference =
        Math.abs(toRow - fromRow);

    const colDifference =
        Math.abs(toCol - fromCol);


    const movesStraight =
        fromRow === toRow ||
        fromCol === toCol;

    const movesDiagonal =
        rowDifference === colDifference;


    if (
        !movesStraight &&
        !movesDiagonal
    ) {

        return false;

    }


    if (
        rowDifference === 0 &&
        colDifference === 0
    ) {

        return false;

    }


    if (
        !isPathClear(
            board,
            fromRow,
            fromCol,
            toRow,
            toCol
        )
    ) {

        return false;

    }


    const destination =
        getPiece(
            board,
            toRow,
            toCol
        );


    return (
        destination === null ||
        destination.color !== color
    );

}


/* =========================================================
   KING
========================================================= */

function isValidKingMove(
    board,
    fromRow,
    fromCol,
    toRow,
    toCol,
    color
) {

    const rowDifference =
        Math.abs(toRow - fromRow);

    const colDifference =
        Math.abs(toCol - fromCol);


    if (
        rowDifference > 1 ||
        colDifference > 1 ||
        (
            rowDifference === 0 &&
            colDifference === 0
        )
    ) {

        return false;

    }


    const destination =
        getPiece(
            board,
            toRow,
            toCol
        );


    return (
        destination === null ||
        destination.color !== color
    );

}


/* =========================================================
   UNIVERSAL MOVE CHECKER
========================================================= */

function isValidMove(
    board,
    fromRow,
    fromCol,
    toRow,
    toCol
) {

    if (
        !isInsideBoard(fromRow, fromCol) ||
        !isInsideBoard(toRow, toCol)
    ) {

        return false;

    }


    const piece =
        getPiece(
            board,
            fromRow,
            fromCol
        );


    if (!piece) {
        return false;
    }


    /* Cannot move to the same square */

    if (
        fromRow === toRow &&
        fromCol === toCol
    ) {

        return false;

    }


    /* Cannot capture your own piece */

    const destination =
        getPiece(
            board,
            toRow,
            toCol
        );


    if (
        destination &&
        destination.color === piece.color
    ) {

        return false;

    }


    switch (piece.type) {

        case "pawn":

            return isValidPawnMove(
                board,
                fromRow,
                fromCol,
                toRow,
                toCol,
                piece.color
            );


        case "rook":

            return isValidRookMove(
                board,
                fromRow,
                fromCol,
                toRow,
                toCol,
                piece.color
            );


        case "knight":

            return isValidKnightMove(
                board,
                fromRow,
                fromCol,
                toRow,
                toCol,
                piece.color
            );


        case "bishop":

            return isValidBishopMove(
                board,
                fromRow,
                fromCol,
                toRow,
                toCol,
                piece.color
            );


        case "queen":

            return isValidQueenMove(
                board,
                fromRow,
                fromCol,
                toRow,
                toCol,
                piece.color
            );


        case "king":

            return isValidKingMove(
                board,
                fromRow,
                fromCol,
                toRow,
                toCol,
                piece.color
            );


        default:

            return false;

    }

}


/* =========================================================
   GET ALL LEGAL MOVES FOR A PIECE
========================================================= */

function getLegalMoves(
    board,
    row,
    col
) {

    const piece =
        getPiece(
            board,
            row,
            col
        );


    if (!piece) {
        return [];
    }


    const moves = [];


    for (
        let targetRow = 0;
        targetRow < 8;
        targetRow++
    ) {

        for (
            let targetCol = 0;
            targetCol < 8;
            targetCol++
        ) {

            if (
                isValidMove(
                    board,
                    row,
                    col,
                    targetRow,
                    targetCol
                )
            ) {

                moves.push({
                    row: targetRow,
                    col: targetCol
                });

            }

        }

    }


    return moves;

}
