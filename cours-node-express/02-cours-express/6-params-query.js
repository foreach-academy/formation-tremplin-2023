const express = require('express');
const app = express();
const { products } = require('./data.js');

app.get('/', (_req, res) => {
  res.status(200).send(`
    <h1>Page d'accueil</h1>
    <a href="/api/v1/products">Produits</a>
  `);
});

// récupère tous les produits
app.get('/api/v1/products', (_req, res) => {
  const newProducts = products.map((product) => {
    const { id, name, image } = product;
    return { id, name, image };
  });
  res.status(200).json({ products: newProducts });
});

// récupère les infos d'un produit
//* paramètres d'url
app.get('/api/v1/products/:productID', (req, res) => {
  const { productID } = req.params;
  const singleProduct = products.find(
    (product) => product.id === Number(productID)
  );

  if (!singleProduct) {
    res.status(404).json({ msg: "Le produit n'existe pas" });
    return;
  }

  res.status(200).json({ product: singleProduct });
});

//* paramètre de requêtes
app.get('/api/v1/query', (req, res) => {
  const { search, limit } = req.query;
  let sortedProducts = [...products];

  if (search) {
    sortedProducts = sortedProducts.filter((product) =>
      product.name.includes(search)
    );
  }

  if (limit) {
    sortedProducts = sortedProducts.slice(0, Number(limit));
  }

  res.status(200).json({ products: sortedProducts });
});

const port = 5000;
app.listen(port, () => console.log(`Server is listening on port ${port}...`));
