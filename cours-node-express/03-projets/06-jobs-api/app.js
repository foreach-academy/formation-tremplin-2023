require('dotenv').config();
require('express-async-errors');
const express = require('express');
const app = express();
// librairies pour la sécurité
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const cors = require('cors');

// middlewares
const notFound = require('./middlewares/not-found.js');
const errorHandler = require('./middlewares/error-handler.js');

// routers
const authRouter = require('./routes/authRoutes.js');
const jobsRouter = require('./routes/jobsRoutes.js');

app.set('trust proxy', 1);
app.use(
  rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
    standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
    legacyHeaders: false // Disable the `X-RateLimit-*` headers
  })
);

app.use(helmet());
app.use(cors());

app.use(express.json());

app.use(express.static('public'));

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/jobs', jobsRouter);

app.use(notFound);
app.use(errorHandler);

const port = 5000;
app.listen(port, () => console.log(`Server is listening on port ${port}...`));
