const { StatusCodes } = require('http-status-codes');

const notFound = (_req, res) =>
  res.status(StatusCodes.NOT_FOUND).json({ msg: "La route n'existe pas" });

module.exports = notFound;
