// traversing the DOM
const questions = document.querySelectorAll('.question');

questions.forEach(function (question) {
  const btn = question.querySelector('.question-btn');

  btn.addEventListener('click', function () {
    questions.forEach(function (item) {
      if (item !== question) item.classList.remove('show-text');
    });

    question.classList.toggle('show-text');
  });
});

// using selectors inside the element
// const plusIcon = document.querySelector('.plus-icon');
// const question = document.querySelector('.question');
// const minusIcon = document.querySelector('.minus-icon');

// plusIcon.addEventListener('click', function () {
//   question.classList.add('show-text');
// });

// minusIcon.addEventListener('click', function () {
//   question.classList.remove('show-text');
// });
