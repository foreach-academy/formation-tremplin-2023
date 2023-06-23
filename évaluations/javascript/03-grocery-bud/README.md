# Liste de courses

## Étapes

### Formulaire

Créez un formulaire qui contient un champs et un bouton. Quand l'utilisateur soumet le formulaire, la fonction `handleSubmit` est appelée.

Dans la fonction `handleSubmit`, empêcher le comportement par défaut de la soumission du formulaire en utilisant `e.preventDefault()`. Si le formulaire est soumis avec une valeur vide, affichez un message.

## Ajouter un élément

Créez une fonction `addItem`.

Si le formulaire est soumis avec une valeur, créez un nouvel objet élément qui comprend un nom (pris à partir de l'input du formulaire) et un identifiant unique (généré en utilisant `Date.now()`).

Écoutez les événements de "clic" sur les boutons "éditer" et "supprimer" puis insérez le nouvel élément dans le DOM en utilisant une fonction `createListItem`.

## Afficher la liste

Créez une fonction `setupItems` qui parcourert la liste des éléments et les affiche.

## Supprimer un élément

Créez une fonction `removeItem` qui supprime l'élément de la liste.

## Éditer un élément

La fonction `editItem` est déclenchée lorsque l'utilisateur clique sur le bouton d'édition d'un élément de la liste.

Dans cette fonction :

- Obtenez d'abord l'élément qui doit être modifié

- Ensuite, définissez `editElement` pour faire référence à l'élément de la liste que vous voulez modifier.

- Définissez ensuite la valeur de l'input pour qu'elle soit égale à la valeur actuelle de `editElement`. Cela affiche la valeur actuelle de l'élément dans le formulaire, prête à être modifiée.

- Définissez `editFlag` à `true` pour indiquer que vous sommes en mode édition.

- Définissez `editID` pour qu'il soit égal à l'ID de l'élément que vous éditez. Cela sera utilisé pour mettre à jour l'élément approprié dans le stockage local.

- Changez le texte du bouton de soumission pour qu'il dise `'éditer'`.

- Mettez le focus sur le champ du formulaire

La fonction `addItem` est également modifiée pour tenir compte du cas où nous sommes en mode édition.

## Reset des paramètres

La fonction `setBackToDefault` est utilisée pour remettre toutes les variables par défaut après une opération.

## Alerte

Implémentez une fonction `displayAlert` qui affiche une alerte lorsqu'un item est ajouté, édité, supprimé ou que l'utilisateur tente de soumettre un formulaire vide.

## local Storage

Configurez une fonctionnalité de stockage local pour conserver la liste des éléments entre les rechargements de page.
