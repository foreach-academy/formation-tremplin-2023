const { StatusCodes } = require('http-status-codes');

const errorHandlerMiddleware = (err, _req, res, _next) => {
  let customError = {
    // définir les valeurs par défaut
    statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
    msg:
      err.message || "Une erreur s'est produite, veuillez réessayer plus tard."
  };

  if (err.code && err.code === '23505') {
    customError.msg = `${err.detail} Veuillez choisir une autre valeur.`;
    customError.statusCode = StatusCodes.BAD_REQUEST;
  }

  res.status(customError.statusCode).json({ msg: customError.msg });
};

module.exports = errorHandlerMiddleware;
