require('dotenv').config();
require('express-async-errors');
const express = require('express');
const app = express();

// middlewares
const notFound = require('./middlewares/notFoundMiddleware.js');
const errorHandler = require('./middlewares/errorHandlerMiddleware.js');

// router
const tasksRouter = require('./routes/tasksRoutes.js');

app.use(express.json());
app.use(express.static('./public'));

app.use('/api/v1/tasks', tasksRouter);

app.use(notFound);
app.use(errorHandler);

const port = 5000;
app.listen(port, console.log(`Server is listening on port ${port}...`));
