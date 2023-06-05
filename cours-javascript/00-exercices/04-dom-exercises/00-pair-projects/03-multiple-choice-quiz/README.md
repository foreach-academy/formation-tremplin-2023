# Quiz à Choix Multiples

Créer un quiz simple où chaque question a plusieurs choix de réponses. L'utilisateur peut cliquer sur une réponse pour voir si elle est correcte ou non.

**HTML :**

```html
<div class="question">
  <h2 class="question-title">Quelle est la capitale de la France ?</h2>
  <div class="question-answers">
    <button class="answer-btn">Londres</button>
    <button class="answer-btn">Berlin</button>
    <button class="answer-btn">Paris</button>
    <button class="answer-btn">Madrid</button>
  </div>
  <div class="feedback"></div>
</div>
<!-- Répéter pour autant de questions que nécessaire -->
```

**Répartition des tâches :**

- **Élève 1 :** Créer le HTML et CSS pour une question et ses réponses. Commencer le JavaScript pour ajouter des écouteurs d'événements aux réponses.

- **Élève 2 :** Compléter le JavaScript pour vérifier si la réponse cliquée est correcte et afficher un message approprié.
