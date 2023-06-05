// Exercice 1
const newListItem = document.createElement('li');
newListItem.textContent = "Nouveau texte d'élément de liste";
const unorderedList = document.querySelector('ul');
unorderedList.append(newListItem);

// Exercice 2
const newParagraph = document.createElement('p');
newParagraph.textContent = 'Nouveau paragraphe ajouté au début du corps';
const body = document.querySelector('body');
// body.insertBefore(newParagraph, body.firstChild);
body.prepend(newParagraph);

// Exercice 3
const newElement = document.createElement('div');
newElement.textContent = 'Nouvel élément ajouté avant un élément spécifique';
const specificElement = document.querySelector('#specific-element');
specificElement.insertAdjacentElement('beforebegin', newElement);

// Exercice 4
const elementToReplace = document.querySelector('#element-to-replace');
elementToReplace.textContent = "Nouveau texte pour remplacer l'ancien texte";

// Exercice 5
const addTaskButton = document.querySelector('#addTaskButton');
const taskInput = document.querySelector('#taskInput');
const taskList = document.querySelector('#taskList');

addTaskButton.addEventListener('click', function (e) {
  e.preventDefault();
  const newTask = document.createElement('li');
  newTask.textContent = taskInput.value;
  taskList.append(newTask);
  taskInput.value = '';
});
