//* objet window = browser api
//* document dans l'objet window
//* console.dir

//objet window, on parle de l'onglet actuel
// console.log(window);

// on remarque que la seconde prop est la fonction alert
// alert();

// techniquement on devrait utiliser
// window.alert();

// Si JS ne trouve pas la méthode, il va la chercher dans l'objet window, c'est pourquoi on peut skipper le window et taper directement ses props
// window.document

// pas très utile car on affichera la structure de notre page
// console.log(document);

// on peut voir toutes les props et méthodes auxquelles on a accès
console.dir(document);
