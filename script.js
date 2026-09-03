const TOTAL_QUESTIONS = 10;
const TIME_PER_QUESTION = 20;
const SCORE_PER_CORRECT = 5;

let currentQuestion = 0;
let score = 0;
let correctCount = 0;
let wrongCount = 0;

let correctAnswer = 0;
let timer = TIME_PER_QUESTION;
let timerInterval = null;

const homeScreen = document.getElementById("homeScreen");
const gameScreen = document.getElementById("gameScreen");
const resultScreen = document.getElementById("resultScreen");

const startButton = document.getElementById("startButton");
const restartButton = document.getElementById("restartButton");

const homeButton = document.getElementById("homeButton");
const backHomeButton = document.getElementById("backHomeButton");

const questionText = document.getElementById("questionText");
const answerContainer = document.getElementById("answerContainer");

const questionNumber = document.getElementById("questionNumber");
const levelText = document.getElementById("levelText");
const scoreText = document.getElementById("scoreText");

const timerText = document.getElementById("timerText");
const progressBar = document.getElementById("progressBar");

const feedback = document.getElementById("feedback");

const finalScore = document.getElementById("finalScore");
const correctTotal = document.getElementById("correctTotal");
const wrongTotal = document.getElementById("wrongTotal");

const resultMessage = document.getElementById("resultMessage");

const bestScoreHome =
  document.getElementById("bestScoreHome");


/* ========================
   LOCAL STORAGE
======================== */

function getBestScore() {

  return Number(
    localStorage.getItem("mathBestScore")
  ) || 0;

}

function updateBestScore() {

  const bestScore = getBestScore();

  if (score > bestScore) {

    localStorage.setItem(
      "mathBestScore",
      score
    );

  }

  bestScoreHome.textContent =
    getBestScore();

}

bestScoreHome.textContent =
  getBestScore();


/* ========================
   SCREEN
======================== */

function showScreen(screen) {

  homeScreen.classList.remove("active");
  gameScreen.classList.remove("active");
  resultScreen.classList.remove("active");

  screen.classList.add("active");

}


/* ========================
   START GAME
======================== */

function startGame() {

  currentQuestion = 0;

  score = 0;

  correctCount = 0;

  wrongCount = 0;

  showScreen(gameScreen);

  createQuestion();

}


/* ========================
   LEVEL
======================== */

function getCurrentLevel() {

  if (currentQuestion < 10) {
    return 1;
  }

  return 2;

}


/* ========================
   RANDOM
======================== */

function randomNumber(min, max) {

  return Math.floor(
    Math.random() * (max - min + 1)
  ) + min;

}


/* ========================
   CREATE QUESTION
======================== */

function createQuestion() {

  clearInterval(timerInterval);

  feedback.textContent = "";
  feedback.className = "feedback";

  currentQuestion++;

  if (currentQuestion > TOTAL_QUESTIONS) {

    finishGame();
    return;

  }

  const level = getCurrentLevel();

  questionNumber.textContent =
    currentQuestion;

  levelText.textContent =
    level;

  scoreText.textContent =
    score;

  progressBar.style.width =
    `${(currentQuestion / TOTAL_QUESTIONS) * 100}%`;

  let number1;
  let number2;
  let operator;

  const questions = [
  {
    question: "5 + 3 = ?",
    answer: 8,
    choices: [6, 7, 8, 9]
  },
  {
    question: "10 - 4 = ?",
    answer: 6,
    choices: [4, 5, 6, 7]
  },
  {
    question: "7 + 8 = ?",
    answer: 15,
    choices: [13, 14, 15, 16]
  },
  {
    question: "15 - 6 = ?",
    answer: 9,
    choices: [7, 8, 9, 10]
  }
];


  /* hindari hasil negatif */

  if (
    operator === "-" &&
    number2 > number1
  ) {

    [number1, number2] =
      [number2, number1];

  }


  if (operator === "+") {

    correctAnswer =
      number1 + number2;

  }

  if (operator === "-") {

    correctAnswer =
      number1 - number2;

  }

  if (operator === "×") {

    correctAnswer =
      number1 * number2;

  }


  questionText.textContent =
    `${number1} ${operator} ${number2} = ?`;

  createAnswers();

  startTimer();

}


/* ========================
   ANSWERS
======================== */

function createAnswers() {

  answerContainer.innerHTML = "";

  let answers = [correctAnswer];

  while (answers.length < 4) {

    const offset =
      randomNumber(-8, 8);

    const wrong =
      correctAnswer + offset;

    if (
      wrong >= 0 &&
      !answers.includes(wrong)
    ) {

      answers.push(wrong);

    }

  }

  answers =
    answers.sort(
      () => Math.random() - 0.5
    );

  answers.forEach(answer => {

    const button =
      document.createElement("button");

    button.className =
      "answer-button";

    button.textContent =
      answer;

    button.addEventListener(
      "click",
      () => checkAnswer(
        answer,
        button
      )
    );

    answerContainer.appendChild(
      button
    );

  });

}


/* ========================
   CHECK ANSWER
======================== */

function checkAnswer(
  selectedAnswer,
  selectedButton
) {

  clearInterval(timerInterval);

  disableAnswers();

  if (
    selectedAnswer ===
    correctAnswer
  ) {

    score += SCORE_PER_CORRECT;

    correctCount++;

    selectedButton.classList.add(
      "correct"
    );

    feedback.textContent =
      "Hebat! Jawaban benar 🎉";

    feedback.classList.add(
      "correct"
    );

  } else {

    wrongCount++;

    selectedButton.classList.add(
      "wrong"
    );

    feedback.textContent =
      `Belum tepat. Jawabannya ${correctAnswer}`;

    feedback.classList.add(
      "wrong"
    );

    showCorrectAnswer();

  }

  scoreText.textContent =
    score;

  setTimeout(
    createQuestion,
    1100
  );

}


/* ========================
   DISABLE ANSWERS
======================== */

function disableAnswers() {

  const buttons =
    document.querySelectorAll(
      ".answer-button"
    );

  buttons.forEach(button => {

    button.disabled = true;

  });

}


/* ========================
   SHOW CORRECT ANSWER
======================== */

function showCorrectAnswer() {

  const buttons =
    document.querySelectorAll(
      ".answer-button"
    );

  buttons.forEach(button => {

    if (
      Number(button.textContent) ===
      correctAnswer
    ) {

      button.classList.add(
        "correct"
      );

    }

  });

}


/* ========================
   TIMER
======================== */

function startTimer() {

  timer = TIME_PER_QUESTION;

  timerText.textContent =
    timer;

  timerInterval =
    setInterval(() => {

      timer--;

      timerText.textContent =
        timer;

      if (timer <= 0) {

        clearInterval(
          timerInterval
        );

        timeOut();

      }

    }, 1000);

}


/* ========================
   TIME OUT
======================== */

function timeOut() {

  wrongCount++;

  disableAnswers();

  showCorrectAnswer();

  feedback.textContent =
    `Waktu habis! Jawabannya ${correctAnswer}`;

  feedback.className =
    "feedback wrong";

  setTimeout(
    createQuestion,
    1200
  );

}


/* ========================
   RESULT
======================== */

function finishGame() {

  clearInterval(timerInterval);

  updateBestScore();

  finalScore.textContent =
    score;

  correctTotal.textContent =
    correctCount;

  wrongTotal.textContent =
    wrongCount;

  if (score >= 90) {

    resultMessage.textContent =
      "Luar biasa! Kamu jago matematika! 🌟";

  } else if (score >= 70) {

    resultMessage.textContent =
      "Hebat! Terus pertahankan! 🎉";

  } else if (score >= 50) {

    resultMessage.textContent =
      "Bagus! Yuk latihan lagi! 💪";

  } else {

    resultMessage.textContent =
      "Tetap semangat belajar! 📚";

  }

  showScreen(resultScreen);

}


/* ========================
   BUTTON EVENTS
======================== */

startButton.addEventListener(
  "click",
  startGame
);

restartButton.addEventListener(
  "click",
  startGame
);

homeButton.addEventListener(
  "click",
  () => {

    clearInterval(timerInterval);

    showScreen(homeScreen);

    updateBestScore();

  }
);

backHomeButton.addEventListener(
  "click",
  () => {

    showScreen(homeScreen);

    updateBestScore();

  }
);
