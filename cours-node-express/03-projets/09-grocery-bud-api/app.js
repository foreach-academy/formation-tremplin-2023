require('express-async-errors');
require('dotenv').config();
const express = require('express');
const app = express();
const { body, validationResult } = require('express-validator');

// middlewares
const notFound = require('./middlewares/notFoundMiddleware.js');
const errorHandler = require('./middlewares/errorHandlerMiddleware.js');

// routers
const authRouter = require('./routes/authRoutes.js');

app.use(express.json());

app.post(
  '/api/v1/test',
  [
    body('name')
      .trim()
      .notEmpty()
      .withMessage('Le nom est requis')
      .isLength({ min: 3, max: 50 })
      .withMessage('Le nom doit contenir entre  3 et 50 caractères')
      .escape(),
    (req, _res, next) => {
      const errors = validationResult(req);
      console.log(errors);

      if (!errors.isEmpty()) {
        throw new Error('Erreur de validation');
      }

      next();
    }
  ],
  (req, res) => {
    const { name } = req.body;

    res.status(200).json({ message: `Salut ${name}` });
  }
);

app.use('/api/v1/auth', authRouter);

app.use(notFound);
app.use(errorHandler);

const port = 5000;
app.listen(port, () => console.log(`Server is listening on ${port}...`));
