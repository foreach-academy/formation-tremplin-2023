const { UnauthenticatedError } = require('../errors');
const jwt = require('jsonwebtoken');

const authenticateUser = (req, _res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    throw new UnauthenticatedError('Pas de token fournit');
  }

  const token = authHeader.split(' ')[1];

  try {
    const { name, userId, role } = jwt.verify(token, process.env.JWT_SECRET);
    req.user = { name, userId, role };
    next();
  } catch (error) {
    throw new UnauthenticatedError('Authentification non valide');
  }
};

module.exports = { authenticateUser };
