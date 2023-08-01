const { BadRequestError } = require('../errors');
const { StatusCodes } = require('http-status-codes');
const jwt = require('jsonwebtoken');

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
  res.status(StatusCodes.OK).json({
    msg: `Salut ${req.user?.username} !`,
    secret: 'Voici vos données autorisées.'
  });
};

module.exports = { login, dashboard };
