require('dotenv').config();
require('express-async-errors');
const express = require('express');
const app = express();
const fileUpload = require('express-fileupload');

// middlewares
const notFound = require('./middleware/not-found');
const errorHandler = require('./middleware/error-handler');

// router
const productsRouter = require('./routes/productsRoutes.js');

const port = 5000;

app.use(express.static('./public'));
app.use(express.json());
app.use(fileUpload());

app.use('/api/v1/products', productsRouter);

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is listening on port ${port}...`);
});
