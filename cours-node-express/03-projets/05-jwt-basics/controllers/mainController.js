const { BadRequestError, UnauthenticatedError } = require('../errors');
const jwt = require('jsonwebtoken');
const { StatusCodes } = require('http-status-codes');

const login = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    throw new BadRequestError(
      "Veuillez forunir un nom d'utilisateur et un mot de passe."
    );
  }

  const id = new Date().getTime();

  //* créé un token
  // args - payload, secret, options
  const token = jwt.sign({ id, username }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_LIFETIME
  });

  res.status(StatusCodes.OK).json({ msg: 'Utilisateur connecté', token });
};

const dashboard = async (req, res) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    throw new UnauthenticatedError('Pas de token fournit');
  }

  res.send('dashboard');
};

module.exports = { login, dashboard };
