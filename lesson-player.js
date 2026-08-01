const params = new URLSearchParams(window.location.search);

const lessonName = params.get("lesson");


if (!lessonName || !lessons[lessonName]) {

    window.location.href = "basics.html";

}


const lessonSteps = lessons[lessonName];

let currentStep = 0;



// ELEMENTS

const progressFill = document.getElementById(
    "lesson-progress-fill"
);

const pageTitle = document.getElementById("page-title");

const title = document.getElementById("lesson-title");

const text = document.getElementById("lesson-text");

const button = document.getElementById("lesson-btn");



// LESSON TITLES

const lessonTitles = {

    king: "♔ Lesson 1: King",

    queen: "♕ Lesson 2: Queen",

    rook: "♖ Lesson 3: Rook",

    bishop: "♗ Lesson 4: Bishop",

    knight: "♘ Lesson 5: Knight",

    pawn: "♙ Lesson 6: Pawn",

    enpassant: "♙ Lesson 7: En Passant",

    capturing: "⚔ Lesson 8: Capturing",

    check: "♔ Lesson 9: Check",

    escapecheck: "🛡 Lesson 10: Getting Out of Check",

    checkmate: "♚ Lesson 11: Checkmate",

    castling: "♔ Lesson 12: Castling",

    setup: "♙ Lesson 13: Setting Up the Board"

};


pageTitle.textContent = lessonTitles[lessonName];

document.title = `${lessonTitles[lessonName]} - Chess Club`;




// PROGRESS BAR

function updateProgress(){

    if (!progressFill) return;


    const progress =
        (currentStep / (lessonSteps.length - 1)) * 100;


    progressFill.style.width =
        progress + "%";

}




// LOAD LESSON STEP

function loadStep(){

    const step = lessonSteps[currentStep];

    title.textContent = step.title;

    text.textContent = step.text;

    if (step.type === "challenge") {

        button.style.visibility = "hidden";
        button.disabled = true;
    
    } else {
    
        button.style.visibility = "visible";
        button.disabled = false;
    
        button.textContent = step.button;
    
    }   
    
    const interactiveTypes = [
        "practice",
        "challenge",
        "quiz"
    ];

    window.boardInteractive =
        interactiveTypes.includes(step.type);


    updateProgress();

    loadBoard(
        step.pieces || {},
        step.highlights || []
    );

}
// BUTTON

button.addEventListener("click", () => {

    const step = lessonSteps[currentStep];

    if (step.type === "challenge") {
        return;
    }

    if (step.type === "complete") {

        window.location.href = "basics.html";
        return;

    }

    if (currentStep < lessonSteps.length - 1) {

        currentStep++;
        loadStep();

    }

});

// START LESSON

loadStep();

window.onBoardMove = function(from, to) {

    const step = lessonSteps[currentStep];


    // no board on this step

    if (!step.pieces) {

        return;

    }


    const movingPiece =
        step.pieces[from];


    if (!movingPiece) {

        return;

    }


    // KING LESSON

    if (lessonName === "king") {

        const files = "abcdefgh";

        const fromFile =
            files.indexOf(from[0]);

        const fromRank =
            parseInt(from[1]);

        const toFile =
            files.indexOf(to[0]);

        const toRank =
            parseInt(to[1]);


        const dx =
            Math.abs(toFile - fromFile);

        const dy =
            Math.abs(toRank - fromRank);


        // king can only move 1 square

        if (dx > 1 || dy > 1) {

            return;

        }

    }


    delete step.pieces[from];

    step.pieces[to] = movingPiece;


    // challenge step

    if (step.target) {

        if (to === step.target) {

            currentStep++;

            loadStep();

            return;

        }

    }


    loadBoard(
        step.pieces,
        step.highlights || []
    );

};
