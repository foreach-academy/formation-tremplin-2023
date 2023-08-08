const { StatusCodes } = require('http-status-codes');

const errorHandlerMiddleware = (err, _req, res, _next) => {
  console.log(err);

  const statusCodes = err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR;
  const msg =
    err.message || "Une erreur s'est produite, veuillez réessayer plus tard";

  res.status(statusCodes).json({ msg });
};

module.exports = errorHandlerMiddleware;
