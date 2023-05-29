# Exercices DOM

## Modification de contenu de l'élément

Créez un paragraphe dans le HTML et donnez-lui un id. Écrivez un script qui change le texte de ce paragraphe en utilisant `getElementById` et `.textContent`.

## Utilisation d'écouteurs d'événements

Ajoutez un bouton à la page, puis demandez aux élèves d'ajouter un écouteur d'événements click à ce bouton qui change la couleur du fond de la page à chaque clic.

## Sélection d'éléments et la navigation dans le DOM :

Sélectionner "Paragraphe 2" en utilisant seulement `getElementById`, `getElementsByClassName` et `children`.

```html
<div id="parent">
  <div class="child">
    <p>Paragraphe 1</p>
    <p>Paragraphe 2</p>
  </div>
  <div class="child">
    <p>Paragraphe 3</p>
  </div>
</div>
```

## Exercice sur la manipulation de classes

Créez un bouton qui, lorsqu'on clique dessus, affiche un élément, modifiant sa classe. Vous pouvez utiliser` element.classList.add` pour cela.

Pour un défi supplémentaire, faites en sorte que le bouton alterne la classe on/off à chaque clic.

## Exercice sur les écouteurs d'événements

Créez une page avec plusieurs boutons, chacun ayant une couleur différente. Écrivez un script qui change la couleur d'arrière-plan de la page en fonction du bouton qui est cliqué. Vous devez utiliser `addEventListener` pour écouter les événements de clic sur chaque bouton.
