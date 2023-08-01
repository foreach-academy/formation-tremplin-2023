const { StatusCodes } = require('http-status-codes');

const errorHandlerMiddleware = (err, _req, res, _next) => {
  let customError = {
    // définir les valeurs par défaut
    statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
    msg:
      err.message || "Une erreur s'est produite, veuillez réessayer plus tard."
  };

  res.status(customError.statusCode).json({ msg: customError.msg });
};

module.exports = errorHandlerMiddleware;
