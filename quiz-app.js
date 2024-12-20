const questions = [
    {
        question: "Was war das erste Geschenk, das du mir gemacht hast?",
        options: ["Halbe Bier", "Lego", "Jägermeister", "Schlafplatz für eine Nacht"],
        correct: 2,
    },
    {
        question: "Aus welchem Holz ist unsere Hochzeitsbank?",
        options: ["Lärche", "Esche", "Buche", "Fichte"],
        correct: 3,
    },
    {
        question: "Welche Aufgabe hat mir beim Umbau am meisten Nerven gekostet?",
        options: ["Möbel wegtragen", "Estrich stemmen", "Glaswolle entsorgen", "Dampfbremse montieren"],
        correct: 3,
    },
    {
        question: "Welche Aufgabe hat dir beim Umbau am meisten Nerven gekostet?",
        options: ["Möbel wegtragen", "Estrich stemmen", "Glaswolle entsorgen", "Dampfbremse montieren"],
        correct: 2,
    },
    {
        question: "Wieviel Stanley-Messer sind uns wohl während der Baustelle abhanden gekommen?",
        options: ["3", "6", "9", "keins - alle verschollen"],
        correct: 1,
    },
    {
        question: "Welche Uhrzeit ist die einzig wahre?",
        options: ["05:25", "12:21", "16:00", "22:22"],
        correct: 3,
    },
    {
        question: "Zu welchem Formel 1 Rennen wollen wir als nächstes?",
        options: ["Ungarn", "Imola", "Deutschland", "Slowenien"],
        correct: 0,
    },
];

let currentQuestionIndex = 0;
let incorrectQuestions = [];
const app = document.getElementById("app");
const finalMessage = document.getElementById("final-message");

function renderQuestion() {
    if (currentQuestionIndex < questions.length) {
        const question = questions[currentQuestionIndex];
        app.innerHTML = `
            <h2>Frage ${currentQuestionIndex + 1}: ${question.question}</h2>
            <ul>
                ${question.options
                    .map(
                        (option, index) =>
                            `<li onclick="checkAnswer(${index})">${option}</li>`
                    )
                    .join("")}
            </ul>
        `;
    } else if (incorrectQuestions.length > 0) {
        // Recycle incorrect questions
        questions.push(...incorrectQuestions);
        incorrectQuestions = [];
        currentQuestionIndex = questions.length - incorrectQuestions.length;
        renderQuestion();
    } else {
        renderResult();
    }
}

function checkAnswer(selected) {
    const question = questions[currentQuestionIndex];
    if (selected !== question.correct) {
        incorrectQuestions.push(question);
    }
    currentQuestionIndex++;
    renderQuestion();
}

function renderResult() {
    app.style.display = "none"; // Versteckt das Quiz
    finalMessage.style.display = "block"; // Zeigt den finalen Text mit dem Video an
}

function restartQuiz() {
    currentQuestionIndex = 0;
    incorrectQuestions = [];
    app.style.display = "block";
    finalMessage.style.display = "none";
    renderQuestion();
}

// Quiz starten
renderQuestion();
