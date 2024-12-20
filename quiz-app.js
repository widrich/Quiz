const questions = [
    {
        question: "Was war das erste Geschenk, das du mir gemacht hast?",
        options: ["Halbe Bier", "Lego", "Jägermeister", "Schlafplatz für eine Nacht"],
        correct: 2,
        answeredCorrectly: false,
    },
    {
        question: "Aus welchem Holz ist unsere Hochzeitsbank?",
        options: ["Lärche", "Esche", "Buche", "Fichte"],
        correct: 3,
        answeredCorrectly: false,
    },
    {
        question: "Welche Aufgabe hat mir beim Umbau am meisten Nerven gekostet?",
        options: ["Möbel wegtragen", "Estrich stemmen", "Glaswolle entsorgen", "Dampfbremse montieren"],
        correct: 3,
        answeredCorrectly: false,
    },
    {
        question: "Welche Aufgabe hat dir beim Umbau am meisten Nerven gekostet?",
        options: ["Möbel wegtragen", "Estrich stemmen", "Glaswolle entsorgen", "Dampfbremse montieren"],
        correct: 2,
        answeredCorrectly: false,
    },
    {
        question: "Wieviel Stanley-Messer sind uns wohl während der Baustelle abhanden gekommen?",
        options: ["3", "6", "9", "keins - alle verschollen"],
        correct: 1,
        answeredCorrectly: false,
    },
    {
        question: "Welche Uhrzeit ist die einzig wahre?",
        options: ["05:25", "12:21", "16:00", "22:22"],
        correct: 3,
        answeredCorrectly: false,
    },
    {
        question: "Zu welchem Formel 1 Rennen wollen wir als nächstes?",
        options: ["Ungarn", "Imola", "Deutschland", "Slowenien"],
        correct: 0,
        answeredCorrectly: false,
    },
];

let currentQuestionIndex = 0;

const app = document.getElementById("app");
const finalMessage = document.getElementById("final-message");

function renderQuestion() {
    const unansweredQuestions = questions.filter(q => !q.answeredCorrectly);

    if (unansweredQuestions.length > 0) {
        const question = unansweredQuestions[currentQuestionIndex % unansweredQuestions.length];
        app.innerHTML = `
            <h2>Frage: ${question.question}</h2>
            <ul>
                ${question.options
                    .map(
                        (option, index) =>
                            `<li onclick="checkAnswer(${questions.indexOf(question)}, ${index})">${option}</li>`
                    )
                    .join("")}
            </ul>
        `;
    } else {
        renderResult();
    }
}

function checkAnswer(questionIndex, selected) {
    const question = questions[questionIndex];

    if (selected === question.correct) {
        question.answeredCorrectly = true;
    }

    renderQuestion();
}

function renderResult() {
    app.style.display = "none"; // Versteckt das Quiz
    finalMessage.style.display = "block"; // Zeigt den finalen Text mit dem Video an
}

function restartQuiz() {
    questions.forEach(q => (q.answeredCorrectly = false));
    currentQuestionIndex = 0;
    app.style.display = "block";
    finalMessage.style.display = "none";
    renderQuestion();
}

// Quiz starten
renderQuestion();
