require('express-async-errors');
require('dotenv').config();
const express = require('express');
const app = express();
const { validateTest } = require('./middlewares/validationMiddleware.js');

// middlewares
const notFound = require('./middlewares/notFoundMiddleware.js');
const errorHandler = require('./middlewares/errorHandlerMiddleware.js');

// routers
const authRouter = require('./routes/authRoutes.js');
const itemsRouter = require('./routes/itemsRoutes.js');

app.use(express.json());

app.get('/api/v1/test', (_req, res) => {
  res.status(200).json({ message: `Hello world` });
});

// test express validator
app.post('/api/v1/test', validateTest, (req, res) => {
  const { name } = req.body;
  res.status(200).json({ message: `Salut ${name}` });
});

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/items', itemsRouter);

app.use(notFound);
app.use(errorHandler);

const port = 5000;
app.listen(port, () => console.log(`Server is listening on ${port}...`));
