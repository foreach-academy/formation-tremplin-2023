const questionsCenter = document.querySelector('.questions-center');
const scoreValue = document.querySelector('.score');
const submitBtn = document.querySelector('.submit-btn');
const resetBtn = document.querySelector('.reset-btn');
const modal = document.querySelector('.modal-overlay');
const closeBtn = document.querySelector('.close-btn');
const feedbacks = document.querySelectorAll('.feedback');
const allAnswerButtons = document.querySelectorAll('.answer-btn');

const correctAnswers = {
  question1: 'function myFunction()',
  question2: '//',
  question3: 'window.alert()',
  question4: 'infinite loop',
  question5: 'const x = [1,2,3]'
};
let userAnswers = {};
let score = 0;

const resetQuizz = () => {
  allAnswerButtons.forEach((btn) => {
    btn.classList.remove('clicked');
  });

  feedbacks.forEach(function (feedback) {
    feedback.innerText = '';
  });

  score = 0;
  userAnswers = {};
  scoreValue.textContent = score;
  modal.classList.remove('show-modal');
};

questionsCenter.addEventListener('click', function (e) {
  const styles = e.target.classList;

  if (styles.contains('answer-btn')) {
    const parentDiv = e.target.parentElement;
    const allButtons = parentDiv.querySelectorAll('.answer-btn');
    const userAnswer = e.target.textContent;
    const questionId = e.target.parentElement.previousElementSibling.dataset.id;

    allButtons.forEach((btn) => {
      btn.classList.remove('clicked');
    });

    e.target.classList.add('clicked');
    userAnswers[questionId] = userAnswer;

    if (userAnswers[questionId] === correctAnswers[questionId]) {
      score++;
    }
  }
});

submitBtn.addEventListener('click', function () {
  feedbacks.forEach(function (feedback) {
    const questionId =
      feedback.previousElementSibling.previousElementSibling.dataset.id;

    if (userAnswers[questionId] === correctAnswers[questionId]) {
      feedback.textContent = "C'est correct !";
      feedback.classList.add('success');
    } else {
      feedback.textContent = `La bonne réponse était : ${correctAnswers[questionId]}`;
      feedback.classList.add('error');
    }
  });

  scoreValue.textContent = score;
  modal.classList.add('show-modal');
});

resetBtn.addEventListener('click', resetQuizz);

closeBtn.addEventListener('click', function () {
  modal.classList.remove('show-modal');
});
