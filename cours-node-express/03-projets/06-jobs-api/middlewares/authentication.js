const { UnauthenticatedError } = require('../errors');
const jwt = require('jsonwebtoken');

const authenticateUser = (req, _res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    throw new UnauthenticatedError('Pas de token fournit.');
  }

  const token = authHeader.split(' ')[1];

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    req.user = {
      userID: payload.userID,
      name: payload.name
    };
    next();
  } catch (error) {
    throw new UnauthenticatedError('Accès non autorisé.');
  }
};

module.exports = authenticateUser;
