const answers = [
  {
    questions: "When is world health day?",
    a: "Apr 7",
    b: "December 5",
    c: "March 10",
    d: "Jun 15",
    correct: "a",
  },
  {
    questions: "who was the president of america in 1992?",
    a: "Joe Biden",
    b: "George H. W. Bush",
    c: "Donald Trump",
    d: "Neilia Hunter Biden",
    correct: "b",
  },
  {
    questions: "When is world health day?",
    a: "Apr 7",
    b: "December 5",
    c: "March 10",
    d: "Jun 15",
    correct: "a",
  },
  {
    questions: "who was the president of america in 1992?",
    a: "Joe Biden",
    b: "George H. W. Bush",
    c: "Donald Trump",
    d: "Neilia Hunter Biden",
    correct: "b",
  },
];
const questions = document.getElementById("questions");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const answerEls = document.querySelectorAll(".answer");
let currentQuizNumber = 0;
let currentPoint = 0;
function loadQuiz() {
  const currentQuiz = answers[currentQuizNumber];
  questions.innerText = currentQuiz.questions;
  a_text.innerText = currentQuiz.a;
  b_text.innerText = currentQuiz.b;
  c_text.innerText = currentQuiz.c;
  d_text.innerText = currentQuiz.d;
}
loadQuiz();

const submitBtn = document.getElementById("submit");
submitBtn.addEventListener("click", () => {
  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      console.log(answerEl.id);
      answerEl.checked=false;
    }
  });
});
