const toggleBtn = document.querySelector('.btn');
const articlesContainer = document.querySelector('.articles');

toggleBtn.addEventListener('click', () => {
  document.documentElement.classList.toggle('dark-theme');
});

const articlesData = articles
  .map((article) => {
    const { title, date, length, snippet } = article;
    // format date
    const formatDate = moment(date).format('MMMM Do, YYYY');

    return `<article class="post">
            <h2 class="post title">${title}</h2>
            <div class="post-info">
              <span class="date">${formatDate}</span>
              <span class="read time">${length} read time</span>
            </div>
            <p>
              ${snippet}
            </p>
          </article>`;
  })
  .join('');

articlesContainer.innerHTML = articlesData;
