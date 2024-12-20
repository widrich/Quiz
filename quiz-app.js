// Web-App: Weihnachts-Quiz
const questions = [
  {
    question: "Was war das erste Geschenk dass du mir gemacht hast?",
    options: ["Halbe Bier", "Lego", "Jägermeister", "Schlafplatz für eine Nacht"],
    correct: 2
  },
  {
    question: "Aus welchem Holz ist unsere Hochzeitsbank?",
    options: ["Lärche", "Esche", "Buche", "Fichte"],
    correct: 3
  },
  {
    question: "Welche Aufgabe hat mir beim Umbau am meisten Nerven gekostet?",
    options: ["Möbel wegtragen", "Estrich stemmen", "Glaswolle entsorgen", "Dampfbremse montieren"],
    correct: 3
  },
  {
    question: "Welche Aufgabe hat dir beim Umbau am meisten Nerven gekostet?",
    options: ["Möbel wegtragen", "Estrich stemmen", "Glaswolle entsorgen", "Dampfbremse montieren"],
    correct: 2
  },
  {
    question: "Wieviel Stanley-Messer sind uns wohl während der Baustelle abhanden gekommen?",
    options: ["3", "6", "9", "keins - alle verschollen"],
    correct: 1
  },
  {
    question: "Welche Uhrzeit ist die einzig wahre?",
    options: ["05:25", "12:21", "16:00", "22:22"],
    correct: 3
  },
  {
    question: "Zu welchem Formel 1 Rennen wollen wir als nächstes?",
    options: ["Ungarn", "Imola", "Deutschland", "Slowenien"],
    correct: 0
  }
];

const app = document.getElementById('app');
let currentQuestion = 0;
let score = 0;
let completedQuestions = Array(questions.length).fill(false);

function renderQuestion() {
  while (currentQuestion < questions.length && completedQuestions[currentQuestion]) {
    currentQuestion++;
  }

  if (currentQuestion < questions.length) {
    const question = questions[currentQuestion];
    app.innerHTML = `
      <h2 style="font-size: 1.5em; font-weight: bold;">Frage ${currentQuestion + 1}: ${question.question}</h2>
      <ul>
        ${question.options.map((option, index) => `<li style="background-color: ${getOptionColor(index)}; padding: 10px; margin: 5px; border-radius: 5px; cursor: pointer;" onclick=\"checkAnswer(${index})\">${option}</li>`).join('')}
      </ul>
    `;
  } else {
    renderResult();
  }
}

function checkAnswer(selected) {
  if (selected === questions[currentQuestion].correct) {
    score++;
    completedQuestions[currentQuestion] = true;
  }
  currentQuestion++;
  renderQuestion();
}

function renderResult() {
  if (score === questions.length) {
    app.innerHTML = `
      <h1>Frohe Weihnachten Weibi ❤️</h1>
      <p>I möcht da sagen, wie sehr i di und unsere stetig wachsende Familie liebe. Du bist das Herzstück des Ganzen und mei Rückhalt in allen Lebenslagen ⚓. Des letzte Jahr war wahrscheinlich des schwierigste und anstrengendste unseres bisherigen Lebens als Pädagoge und Baumeister zugleich🤱🏽👷🏽‍♂️, aber i bin super zuversichtlich für 2025, wenn ma endlich unser eigenes zuhause fertig haben und entspannt auf da Terrasse sitzen kinan mit am Bier und klassischer Musik aus den Boxen 😎🍻</p>
      <p>Vielen Dank dassd ned aufhörst ma immer wieder Sachen zu sagen de i leider doch wieder vergessen hab und mi trotzdem aushältst.</p>
      <p>Folgend a klana Überblick, was ma trotzdem letztes Jahr alles gschafft haben. I lieb di mei Darling 😘</p>
      <button onclick="playVideo()" style="padding: 10px 20px; font-size: 1em; background-color: #0275d8; color: white; border: none; border-radius: 5px; cursor: pointer;">Play Video</button>
      <div id="videoContainer" style="display: none; margin-top: 20px;">
        <video controls>
          <source src="clip.mp4" type="video/mp4">
          Dein Browser unterstützt keine Videos.
        </video>
      </div>
    `;
  } else {
    app.innerHTML = `<h1>Leider nicht alle richtig! Versuch es nochmal 😊</h1>`;
    currentQuestion = 0;
    renderQuestion();
  }
}

function playVideo() {
  const videoContainer = document.getElementById('videoContainer');
  videoContainer.style.display = 'block';
}

function getOptionColor(index) {
  const colors = ["#ff9999", "#99ccff", "#99ff99", "#ffcc99"];
  return colors[index % colors.length];
}

// Initiale Anzeige
renderQuestion();
