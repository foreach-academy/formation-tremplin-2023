# Projet : Mini panneau d'affichage

1. Initialisez un `package.json` avec :

```sh
npm init -y
```

2. Installez express avec :

```sh
npm i express
```

3. Créez un fichier `.gitignore` dans le répertoire de votre projet qui exclut `node_modules`.

```
/node_modules
```

4. Nous allons avoir 2 routes, `"/"` qui retourne les messages et `"/new"` pour poster un nouveau message. Créez ces routes.

Créez un tableau en haut de votre routeur appelé `messages` et mettez quelques exemples de messages à l'intérieur comme ceci :

```js
const messages = [
  {
    text: 'Bonjour !',
    user: 'John',
    added: Date.now()
  },
  {
    text: 'Hello World !',
    user: 'Susan',
    added: Date.now()
  }
];
```

Afin d'obtenir et d'utiliser les données de votre "formulaire", vous devrez accéder au contenu de votre "formulaire" à l'intérieur de app.post() en tant qu'objet appelé `req.body`. Les champs individuels à l'intérieur de l'objet body sont nommés en fonction de l'attribut name de vos entrées.

5. Dans votre route app.post(), prenez le contenu de la soumission du "formulaire" et poussez-le dans le tableau des messages (après vérifiaction) sous la forme d'un objet qui ressemble à ceci :

```js
messages.push({ text: messageText, user: messageUser, added: Date.now() });
```

6. Testez vos routes avec Thunder Client
