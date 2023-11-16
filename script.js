const questions = document.getElementById("questions");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const answerEls = document.querySelectorAll(".answer");
let currentQuizNumber = 0;
let correctPoint = 0;

async function fetchData() {
  const res = await fetch("data.json");
  const resData = await res.json();
  loadQuiz(resData.questions); // Call loadQuiz after fetching data
}
fetchData();

function loadQuiz(answers) {
  const currentQuiz = answers[currentQuizNumber];
  questions.innerText = currentQuiz.questions; // Change from questions to question
  a_text.innerText = currentQuiz.a;
  b_text.innerText = currentQuiz.b;
  c_text.innerText = currentQuiz.c;
  d_text.innerText = currentQuiz.d;
  nextQuz(answers);
}

const submitBtn = document.getElementById("submit");
const quizBox = document.querySelector(".quiz-box");

function getSelect() {
  let answer = undefined;
  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}

function nextQuz(answers) {
  submitBtn.addEventListener("click", () => {
    const choice = getSelect();
    if (choice) {
      answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
          answerEl.checked = false;
        }
      });
      const currentQuiz = answers[currentQuizNumber];
      if (choice == currentQuiz.correct) {
        correctPoint++;
      }
      currentQuizNumber++;
    }
    if (currentQuizNumber < answers.length) {
      fetchData();
    } else {
      quizBox.innerHTML = `
    <h2 style="text-align:center;">You answered correctly at ${correctPoint}/${answers.length} questions.</h2>
    <button onclick="location.reload()">Reload</button>`;
    }
  });
}
