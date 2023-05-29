//* currentTarget - se réfère toujours à l'élément sur lequel l'event handler a été attaché
//* target - identifie l'élément sur lequel l'event se produit

const btns = document.querySelectorAll('.btn');

btns.forEach(function (btn) {
  btn.addEventListener('click', function (e) {
    // le changement se produit sur btn car l'event est attaché à lui
    // console.log('click',e.currentTarget);
    // e.currentTarget.style.color = 'green';

    // si on clique sur la balise imbriqué, le changement ne se produit que sur elle
    console.log('currentTarget', e.currentTarget);
    console.log('target', e.target);
    e.target.style.color = 'green';
  });
});
