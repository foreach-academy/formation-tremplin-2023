require('express-async-errors');
const express = require('express');
const app = express();

// middlewares
const notFoundMiddleware = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');

const sendEmail = require('./controllers/sendEmailController.js');

app.get('/', (_req, res) => {
  res.send("<h1>Projet email</h1><a href='/send'>Envoyer un email</a>");
});

app.get('/send', sendEmail);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = 5000;

app.listen(port, () => {
  console.log(`Server is listening on port ${port}...`);
});
