const btns = document.querySelectorAll('.btn');
const voteCounts = document.querySelectorAll('.vote-count');

btns.forEach(function (btn) {
  btn.addEventListener('click', function (e) {
    if (e.currentTarget.classList.contains('reset')) {
      voteCounts.forEach(function (voteCount) {
        voteCount.textContent = 0;
      });
      return;
    }

    const voteCount = btn.previousElementSibling.querySelector('.vote-count');
    let count = Number(voteCount.textContent);
    count++;
    voteCount.textContent = count;
  });
});
