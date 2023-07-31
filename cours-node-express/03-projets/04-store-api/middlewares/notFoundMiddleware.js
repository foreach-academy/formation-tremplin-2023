const notFoundMiddleware = (_req, res) =>
  res.json({ msg: "La route n'existe pas" });

module.exports = notFoundMiddleware;
