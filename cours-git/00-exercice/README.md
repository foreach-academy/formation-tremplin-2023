# GitHub

- Créer une nouvelle branche et aller dessus

```
git checkout -b nom-de-la-branche
```

- Ajouter son nom dans la liste

- Faire un commit et le pousser

```
git add .
git commit -m "Add name"
git push -u origin nom-de-la-branche
```

- Revenir sur la branche principale

```
git checkout main
```

- Récupérer la dernière version de la branche

```
git pull
```

- Fusionner les branches

```
git merge nom-de-la-branche
```

- Pousser la branche

```
git push
```

- Supprimer la branch locale

```
git branch -d nom-de-la-branche
```

- Supprimer la branche distante

```
git push --delete origin nom-de-la-branche
```
