const btns = document.querySelectorAll('.tab-btn');
const btnContainer = document.querySelector('.btn-container');
const articles = document.querySelectorAll('.content');

btnContainer.addEventListener('click', function (e) {
  const id = e.target.dataset.id;

  // enlève la classe active sur tous les boutons
  btns.forEach(function (btn) {
    btn.classList.remove('active');
  });

  e.target.classList.add('active');

  // cache tous les articles
  articles.forEach(function (article) {
    article.classList.remove('active');
  });

  const element = document.getElementById(id);
  element.classList.add('active');
});
