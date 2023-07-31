require('dotenv').config();
require('express-async-errors');
const express = require('express');
const app = express();

// middlewares
const notFound = require('./middlewares/notFoundMiddleware.js');
const errorHandler = require('./middlewares/errorHandlerMiddleware.js');

// router
const productsRouter = require('./routes/productsRoutes.js');

app.get('/', (_req, res) => [
  res.send("<h1>Store API</h1><a href='/api/v1/products'>Route produits</a>")
]);

app.use('/api/v1/products', productsRouter);

app.use(notFound);
app.use(errorHandler);

const port = 5000;
app.listen(port, () => console.log(`Server is listening on port ${port}...`));
