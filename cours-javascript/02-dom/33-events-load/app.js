//* l'event load s'éxéute quand toute la page a été chargée, en incluant toutes les dépendances comme les feuilles de styles et les images. C'est en contraste avec DOMContentLoaded qui s'éxécute dès que la page DOM a été chargée, sans attendre le chargement des ressources

//* window.addEventListener('load', function () {
//*   // le code
//* });

window.addEventListener('load', function () {
  console.log("Je vais m'exécuter en second");
  const img = document.querySelector('img');
  console.log(img);
  console.log(img.width);
});

window.addEventListener('DOMContentLoaded', function () {
  console.log("DOMContentLoaded - Je vais m'exécuter en premier");
  const img = document.querySelector('img');
  console.log(img);
  console.log(img.width);
});
