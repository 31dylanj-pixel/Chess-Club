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


    button.textContent = step.button;



    updateProgress();



    // LOAD BOARD

    loadBoard(
        step.pieces || {},
        step.highlights || []
    );

}




// BUTTON

button.addEventListener("click", () => {


    const step = lessonSteps[currentStep];


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
