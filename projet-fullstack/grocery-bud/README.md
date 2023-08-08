# Grocery Bud

## Back-end

### Base de données

- Créer la BDD
- Créer un ENUM pour le rôle utilisateur :

```sql
CREATE TYPE user_role AS ENUM ('admin', 'user');
```

- Créer les tables : users, items

```sql
-- colonne role dans la table users
role user_role NOT NULL DEFAULT 'user'
```

### Setup le serveur

- Initialiser package.json
- Installer les librairies : express, pg, dotenv, express-async-errors, http-status-codes, jsonwebtoken, bcryptjs, helmet, express-rate-limit
- Faire les scripts
- Créer un .env
- .gitignore
- Initialiser le serveur

- Créer le dossier db
- Créer database.sql

- Middlewares: notFound, errorHandler

- Errors: BadRequestError, UnauthenticatedError, NotFoundError

#### Controllers

- authController : register, login

#### Routes :

- authRoutes /api/v1/auth

### Thunder Client/Postman

- Créer une collection "Grocery Bud" dans Thunder Client/Postman
  - Créer un dossier Auth

### Inscription de l'utilisateur

- Récupérer les inputs envoyées
- "Valider" les inputs
- Vérifier que l'email n'existe pas dans la BDD
- Si c'est le premier utilisateur, lui attribuer le role "admin"
- Hasher le mot de passe avec bcryptjs
- Insérer l'utilisateur dans la BDD
- Créer un token avec JWT
- Envoyer le token dans la réponse

### Connexion de l'utilisateur

- Récupérer les inputs envoyées
- "Valider" les inputs
- Vérifier si l'utilisateur existe dans la BDD
- Comparer les mots passes avec bcryptjs
- Créer un token avec JWT
- Envoyer le token dans la réponse

### Middleware authenticateUser

- Faire un middleware authenticateUser qui authentifie l'utilisateur (en utilisant JWT) et attache le token décodé à `req.user`

### Contrôleurs et routes pour les articles

- Faire les routes et les contrôleurs pour items :

  - createItem
  - getAllUserItems
  - getItem
  - updateItem
  - deleteItem

- Appeler authenticateUser avant les routes pour les protéger

## Front-end

- Initialiser un projet React ou copier/coller 05-grocery-bud
- Créer des "pages" `Landing.jsx`, `DashboardLayout.jsx`, `Login.jsx`, `Register.jsx` et `ErrorPage.jsx`
- Créer un composant `Navbar.jsx`
- Setup react-router dans `App.jsx`
