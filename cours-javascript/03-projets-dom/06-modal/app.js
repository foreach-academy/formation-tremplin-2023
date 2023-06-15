// sélectionner modal-btn, modal-overlay et close-btn
// écouter les événements "click" sur modal-btn et close-btn
// quand l'utilisateur clique sur modal-btn, ajouter .open-modal à .modal-overlay
// quand l'utilisateur clique sur .close-btn, supprimer .open-modal de .modal-overlay

const modal = document.querySelector('.modal-overlay');
const modalBtn = document.querySelector('.modal-btn');
const closeBtn = document.querySelector('.close-btn');
const modalOverlay = document.querySelector('.modal-overlay');

modalBtn.addEventListener('click', function () {
  modal.classList.add('open-modal');
});

closeBtn.addEventListener('click', function () {
  modal.classList.remove('open-modal');
});

modalOverlay.addEventListener('click', function (e) {
  if (e.target.classList.contains('modal-overlay')) {
    modal.classList.remove('open-modal');
  }
});
