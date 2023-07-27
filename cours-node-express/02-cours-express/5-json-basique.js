const express = require('express');
const app = express();
const { products } = require('./data.js');

app.get('/', (_req, res) => {
  res.status(200).json({ products });
});

const port = 5000;
app.listen(port, () => console.log(`Server is listening on port ${port}...`));
