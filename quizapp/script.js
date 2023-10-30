const quizData = [
  {
    question: "Do you think I really love you?",
    a: "No",
    b: "Yes",
    c: "Imm",
    d: "I don't think so",
    correct: "b",
  },
  {
    question: "What is my birthday?",
    a: "27,May,2005",
    b: "27,March,2005",
    c: "31,February,1995",
    d: "5,Jun,2006",
    correct: "b",
  },
  {
    question: "What is our Anni date?",
    a: "1985,april,15",
    b: "2022,march,24",
    c: "2006,june,15",
    d: "2023,april,15",
    correct: "d",
  },
  {
    question: "Where should we go in our second date?",
    a: "Hotel",
    b: "Guest House",
    c: "Happy World",
    d: "Cinema",
    correct: "b",
  },
];
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const btn = document.querySelector("button");
const answersEls = document.querySelectorAll(".answer");

let currentQuiz = 0;
let correctPoint = 0;
function getSelect() {
  let answer = undefined;
  answersEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}
function loadQiz() {
  const currentQuestionQuiz = quizData[currentQuiz];
  question.innerHTML = currentQuestionQuiz.question;
  a_text.textContent = currentQuestionQuiz.a;
  b_text.textContent = currentQuestionQuiz.b;
  c_text.textContent = currentQuestionQuiz.c;
  d_text.textContent = currentQuestionQuiz.d;
}
loadQiz();
btn.addEventListener("click", () => {
  const answer = getSelect();
  if (answer) {
    answersEls.forEach((answerEl) => {
      answerEl.checked = false;
    });
    if (answer === quizData[currentQuiz].correct) {
      correctPoint++;
    }
    console.log(correctPoint);
    currentQuiz++;
    if (currentQuiz < quizData.length) {
      loadQiz();
    } else {
      quiz.innerHTML = `
                <h2 style="text-align:center;">You answered correctly at ${correctPoint}/${quizData.length} questions.</h2>
                
                <button onclick="location.reload()">Reload</button>
            `;
    }
  }
});
