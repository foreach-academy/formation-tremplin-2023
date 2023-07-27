const express = require('express');
const app = express();

app.get('/', (_req, res) => {
  res.status(200).send("Page d'accueil");
});

app.get('/about', (_req, res) => {
  res.status(200).send('<h1>Page à propos</h1>');
});

app.all('*', (_req, res) => {
  res.status(404).send('<h1>404 Ressource introuvable</h1>');
});

const port = 5000;
app.listen(port, () => console.log(`Server is listening on port ${port}...`));
