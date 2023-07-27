//* middleware - fonction qui s'exécute pendant une requête au serveur
//* accès aux objets Request et Response

const express = require('express');
const app = express();

const logger = require('./logger.js');

//* req => middleware => res

app.use(logger);

// le middleware s'appelle entre le chemin et la fonction callback
app.get('/', (_req, res) => {
  res.send('Accueil');
});

app.get('/about', (_req, res) => {
  res.send('À propos');
});

app.get('/api/v1/products', (_req, res) => {
  res.send('Produts');
});

const port = 5000;
app.listen(port, () => console.log(`Server is listening on port ${port}...`));
