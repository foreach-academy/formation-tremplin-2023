const logger = (req, res, next) => {
  const method = req.method;
  const url = req.url;
  const time = new Date().getFullYear();

  console.log(method, url, time);

  //! lorsqu'on utilise un middleware il faut toujours passer au suivant (méthode next()) sauf si on termine le cycle en envoyant une réponse
  // res.send('Testing');
  next();
};

module.exports = logger;
