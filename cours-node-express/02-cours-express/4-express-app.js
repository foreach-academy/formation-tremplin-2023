const express = require('express');
const app = express();

app.use(express.static('./public'));

app.all('*', (_req, res) => {
  res.status(404).send('<h1>404 Ressource introuvable</h1>');
});

const port = 5000;
app.listen(port, () => console.log(`Server is listening on port ${port}...`));
