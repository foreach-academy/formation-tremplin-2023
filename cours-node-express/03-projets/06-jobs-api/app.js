require('dotenv').config();
require('express-async-errors');
const express = require('express');
const app = express();

// middlewares
const notFound = require('./middlewares/not-found.js');
const errorHandler = require('./middlewares/error-handler.js');

// routers
const authRouter = require('./routes/authRoutes.js');
const jobsRouter = require('./routes/jobsRoutes.js');

app.use(express.json());

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/jobs', jobsRouter);

app.use(notFound);
app.use(errorHandler);

const port = 5000;
app.listen(port, () => console.log(`Server is listening on port ${port}...`));
