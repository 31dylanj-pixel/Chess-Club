const params = new URLSearchParams(window.location.search);

const lessonName = params.get("lesson");

const lessonSteps = lessons[lessonName];

let currentStep = 0;

const pageTitle = document.getElementById("page-title");
const title = document.getElementById("lesson-title");
const text = document.getElementById("lesson-text");
const button = document.getElementById("lesson-btn");

pageTitle.textContent =
    lessonName.charAt(0).toUpperCase() +
    lessonName.slice(1);

function loadStep() {

    const step = lessonSteps[currentStep];

    title.textContent = step.title;
    text.textContent = step.text;
    button.textContent = step.button;
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
