# Créer des éléments

## Exercice 1 : Créer un élément de liste

Créez un nouvel élément de liste (`<li>`) avec du texte à l'intérieur et ajoutez-le à une liste non ordonnée (`<ul>`) existante sur la page.

## Exercice 2 : Ajouter un paragraphe au début du corps

Créez un nouvel élément de paragraphe (`<p>`) avec du texte à l'intérieur. Ensuite, ajoutez ce paragraphe au début du corps de la page.

## Exercice 3 : Insérer un élément avant un autre

Trouvez un élément spécifique sur la page, créez un nouvel élément (par exemple, un <div> ou un <p>), puis insérez le nouvel élément immédiatement avant l'élément spécifique avec la méthode `insertAdjacentElement()`.

## Exercice 4 : Remplacer le texte d'un élément

Sélectionnez un élément spécifique sur la page, puis remplacez le texte de l'élément sélectionné par un nouveau texte.

## Exercice 5 : Créer une liste de tâches

Lorsque l'utilisateur saisit une tâche dans le champ de saisie et clique sur le bouton, créez un nouvel élément de liste (`<li>`) contenant la tâche et ajoutez-le à une liste non ordonnée (`<ul>`) sur la page.

```html
<form>
  <input type="text" id="taskInput" placeholder="Entrez une tâche ici" />
  <button type="submit" id="addTaskButton">Ajouter une tâche</button>
</form>
<ul id="taskList"></ul>
```
