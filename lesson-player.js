const progressFill = document.getElementById(
    "lesson-progress-fill"
);

const params = new URLSearchParams(window.location.search);

const lessonName = params.get("lesson");

if (!lessonName || !lessons[lessonName]) {

    window.location.href = "basics.html";

}

const lessonSteps = lessons[lessonName];

let currentStep = 0;

const pageTitle = document.getElementById("page-title");
const title = document.getElementById("lesson-title");
const text = document.getElementById("lesson-text");
const button = document.getElementById("lesson-btn");

const lessonTitles = {

    pawn: "♙ Lesson 1: Pawn",
    rook: "♖ Lesson 2: Rook",
    knight: "♘ Lesson 3: Knight",
    bishop: "♗ Lesson 4: Bishop",
    queen: "♕ Lesson 5: Queen",
    king: "♔ Lesson 6: King"

};


pageTitle.textContent = lessonTitles[lessonName];

document.title = `${lessonTitles[lessonName]} - Chess Club`;

function updateProgress(){

    const progress =
        (currentStep / (lessonSteps.length - 1)) * 100;


    progressFill.style.width =
        progress + "%";

}

function loadStep(){
    const step = lessonSteps[currentStep];
    title.textContent = step.title;
    text.textContent = step.text;
    button.textContent = step.button;

    updateProgress();

    loadBoard(
        step.board,
        step.highlights
    );

}

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

loadStep();
