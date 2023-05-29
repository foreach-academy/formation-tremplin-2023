# Un simple système de vote

L'idée de ce projet est de créer une petite application de vote. Vous pouvez avoir une liste de candidats (ou de tout autre élément sur lequel voter) et les utilisateurs peuvent cliquer sur un bouton pour voter pour eux. Le nombre total de votes est mis à jour et affiché chaque fois qu'un vote est effectué.

**HTML :**

```html
<div class="candidate">
  <h2 class="name">Candidat 2</h2>
  <button class="vote-btn">Vote</button>
  <p><span class="vote-count">0</span> votes</p>
</div>
<!-- Répéter pour autant de candidats que nécessaire -->
```

**JavaScript :**

L'objectif est d'ajouter un écouteur d'événements à chaque bouton `Vote`, qui met à jour le compteur de votes approprié à chaque fois qu'il est cliqué.

**Répartition des tâches:**

- **Élève 1 :** Préparer le HTML et commencer à configurer le JavaScript. Cela inclut la sélection de tous les boutons `Vote` et l'ajout d'écouteurs d'événements vides.

- **Élève 2 :** Compléter les écouteurs d'événements en augmentant le compteur de votes approprié à chaque fois qu'un bouton est cliqué. Cela implique de naviguer dans le DOM pour trouver le compteur de votes correspondant à partir du bouton qui a été cliqué.

**Bonus**

- Bouton pour réinitialiser tous les compteurs de votes
