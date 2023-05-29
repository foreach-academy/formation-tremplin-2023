# Introduction à Git

Définir la branche locale de git par défaut à `main`

```sh
git config --global init.defaultBranch main
```

Pour plus d'info sur le changement de `master` à `main` voir [renommage de repo GitHub.](https://github.com/github/renaming)

## Céer un repository

1. Se créer un compte GitHub.

2. Créer un nouveau repository avec le bouton `New Repository`.

3. Appeler le repo `git-test`, cocher `Add a README file` et le créer en cliquant sur le bouton `Create repository`.

Cela nous redirige vers la page du repo sur GitHib.

4. Pour cloner le repo, cliquer sur le bouton vert `Code`, sélectionner l'option `HTTPS` puis copier le lien en-dessous.

Nous allons maintenant utiliser le terminal.

5. Créer un nouveau dossier `repos` avec la commande `mkdir`

6. Cloner le repository avec la commande `git clone` suivie du lien que nous avons copié

La commande devrait ressembler à :

```sh
git clone git@github.com:USER-NAME/REPOSITORY-NAME.git
```

7. Aller dans le dossier `git-test` que nous venons de télécharger avec la commande `cd`.

8. Utiliser la commande `git remote -v` pour afficher l'URL du repository.

On peut remarquer le mot `origin` au début qui est le nom de la connexion à distance. Le nom `origin` est à la fois par défaut et la convention pour le repos distant.

## Utiliser le workflow Git

1. Créer une nouveau fichier dans le dossier `git-test` et l'appeler `hello-world.txt` avec la commande `touch hello-world.txt`.

2. Taper `git status` dans le terminal. On remarque que le fichier `hello-world.txt` est affiché en rouge, ce qui signifie que le fichier n'est pas staged ("mis en scène")

3. Taper `git add hello-world.txt`. Cette commande ajoute le fichier `hello-world.txt` à la zone de staging (préparation) de Git.

Il faut considérer la zone de préparation comme une "salle d'attente" pour nos modifications jusqu'à ce que nous les validions.

4. Maintenant, taper à nouveau `git status`. Notons que notre fichier est maintenant affiché en vert, ce qui signifie que ce fichier est maintenant dans la zone de préparation.

5. Taper `git commit -m "Add hello_world.txt"` puis taper `git status` une fois de plus.

Le terminal devrait indiquer : `nothing to commit, working tree clean` (rien à valider, nettoyage de l'arborescence en cours), indiquant que nos modifications ont été validées.

Le message `Your branch is ahead of ‘origin/main’ by 1 commit` (Votre branche est en avance sur 'origine/main' de 1 commit) signifie simplement que nous avons maintenant des snapshots (instantanés) plus récents que ce qui se trouve sur notre repo distant.

6. Taper `git log`. Nous devrions voir une entrée pour votre commit "Add hello_world.txt". Nous verrons également des détails sur l'auteur qui a fait le commit ainsi que la date et l'heure du commit.

Si le terminal est bloqué dans un écran avec (END) en bas, appuyer simplement sur "q" pour sortir.

## Modifier un fichier ou deux

1. Ouvrir `README.md` dans VsCode en utilisant la commande `code README.md`.

2. Ajouter `Bonjour ForEach !` dans `README.md` et enregistrer le fichier avec `Ctrl + S`

3. Revenir dans le terminal ou ouvrir le terminal intégré de Visual Studio Code en appuyant sur `Ctrl + ù`. Taper ensuite `git status`.

On remarque que `README.md` est maintenant affiché comme `not staged or committed` (non mis en scène ou validé).

4. Ajouter `README.md` à la zone de staging avec `git add README.md`.

Pouvez-vous deviner quel statut git affichera maintenant ?

`README.md` s'affichera en texte vert. Cela signifie que `README.md` a été ajouté à la staging area (zone de préparation). Le fichier `hello_world.txt` n'apparaîtra pas car il n'a pas été modifié depuis sa validation.

5. Ouvrir `hello_world.txt`, ajouter du texte, l'enregistrer-le et le mettre dans la staging area.

On peut utiliser `git add .` pour ajouter tous les fichiers du répertoire courant et tous les répertoires suivants à la zone de staging. Ensuite, taper à nouveau `git status`, et tout devrait maintenant être dans la zone de staging.

6. Enfin, validons tous les fichiers qui se trouvent dans la zone de préparation et ajoutons un message de validation descriptif.

```sh
git commit -m "Modifie README.md et hello_world.txt"
```

7. Taper à nouveau `git status` qui affichera `nothing to commit` (rien à valider).

8. Jeter un dernier coup d'œil à l'historique de validation en tapant `git log`. On devrait maintenant voir trois entrées.

## Pousser notre travail sur Github

1. Taper `git push`. Pour être plus précis, taper `git push -u origin main`.

Si on utilise `git push`, nous devons utiliser la commande `git push --set-upstream origin main` pour associer notre branche locale à `origin` ce qui nous permttra d'économiser quelques frappes puisque nous n'avons pas affaire à une autre branche (autre que `main`) ou à une remote différente (comme `origin` mentionnée plus haut)

2. Taper `git status` une dernière fois.

Il devrait afficher `Your branch is up to date with ‘origin/main’. nothing to commit, working tree clean` (Votre branche est à jour avec" origin/main ". rien à s'engager, arbre de travail propre).

3. Lorsque l'on recharge la page du repository sur GitHub, nous devrions voir les fichiers `README.md` et `hello_world.txt` que nous venons de pousser depuis notre ordinateur local.

[Aide mémoire](https://training.github.com/downloads/fr/github-git-cheat-sheet.pdf)

## Bonnes pratiques Git

Un commit atomique est un commit qui inclut des modifications liées à une seule fonctionnalité ou tâche de notre programme. Il y a deux raisons principales à cela :

- Si quelque chose que nous modifions s'avère causer des problèmes, il est facile d'annuler la modification spécifique sans perdre les autres modifications.

- Cela vous permet d'écrire de meilleurs messages de validation.

[S'entrainer](https://learngitbranching.js.org/?locale=fr_FR)
