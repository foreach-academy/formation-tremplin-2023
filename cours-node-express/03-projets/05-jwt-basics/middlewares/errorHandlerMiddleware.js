const errorHandlerMiddleware = (err, _req, res, _next) => {
  const customError = {
    statusCode: err.statusCode || 500,
    msg:
      err.message || "Une erreur s'est produite, veuillez réessayer plus tard."
  };

  res.status(customError.statusCode).json({ msg: customError.msg });
};

module.exports = errorHandlerMiddleware;
