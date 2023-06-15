// ****** SÉLECTIONNE LES ÉLÉMENTS **********

// option d'édition
let editElement;
let editFlag = false;
let editID = '';

// ****** EVENT LISTENERS **********
// soumettre le formulaire
form.addEventListener('submit', addItem);

// vider la liste
clearBtn.addEventListener('click', clearItems);

// charger les éléments
window.addEventListener('DOMContentLoaded', setupItems);

// ****** FONCTIONS **********
// ajoute un élément
function addItem(e) {}

// affiche une alerte
function displayAlert(text, action) {}

//  reset les paramètres
function setBackToDefault() {}

// vide la liste
function clearItems() {}

// supprime un élément
function deleteItem(e) {}

// setup le mode édition
function editItem(e) {}

// ****** LOCAL STORAGE **********
// ajoute dans le local storage
function addToLocalStorage(id, value) {}

// supprime dans le local storage
function removeFromLocalStorage(id) {}

// édite dans le local storage
function editLocalStorage(id, value) {}

// récupère dans le local storage
function getLocalStorage() {}

// ****** SETUP ITEMS **********
// affiche les éléments récupéré du local  storage
function setupItems() {}

// crée et inséère un élément dans le DOM
function createListItem(id, value) {}
