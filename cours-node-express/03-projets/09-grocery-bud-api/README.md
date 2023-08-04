# Grocery Bud API

## Base de données

- Créer la BDD
- Créer un ENUM pour le rôle utilisateur

```sql
CREATE TYPE user_role AS ENUM ('admin', 'user');
```

- Créer les tables : users, items

```sql
-- Dans la table users, ajouter le rôle
role user_role NOT NULL DEFAULT 'user'
```

## SETUP

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

### Controllers

- authController : register, login

### Routes :

- authRoutes /api/v1/auth

### Thunder Client

- Créer une collection "Grocery Bud" dans Thunder Client
  - Créer un dossier Auth

## Inscription de l'utilisateur

- Récupérer les inputs envoyées
- "Valider" les inputs
- Vérifier que l'email n'existe pas dans la BDD
- Si c'est le premier utilisateur, lui attribuer le role "admin"
- Hasher le mot de passe avec bcryptjs
- Insérer l'utilisateur dans la BDD
- Créer un token avec JWT
- Envoyer le token dans la réponse

## Connexion de l'utilisateur

- Récupérer les inputs envoyées
- "Valider" les inputs
- Vérifier si l'utilisateur existe dans la BDD
- Comparer les mots passes avec bcryptjs
- Créer un token avec JWT
- Envoyer le token dans la réponse
