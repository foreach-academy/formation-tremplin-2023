//* scroll event - sur les éléments ou le document

//* window.addEventListener('scroll', function () {
//*   console.log(window.scrollY + 'px');
//*   console.log(window.scrollX + 'px');
//* });

//* document

//* scrollY - retourne le nombre de pixels où le document est scrollé sur l'axe vertical (pageYOffset)

//* scrollX - retourne le nombre de pixels où le document est scrollé sur l'axe horizontal (pageXOffset)

window.addEventListener('scroll', function () {
  console.log(window.scrollY + 'px');
  console.log(window.scrollX + 'px');
});
