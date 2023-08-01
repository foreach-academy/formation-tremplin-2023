const { BadRequestError, UnauthenticatedError } = require('../errors');
const bcrypt = require('bcryptjs');
const db = require('../db');
const jwt = require('jsonwebtoken');
const { StatusCodes } = require('http-status-codes');

const register = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || name.length < 3 || name.length > 50) {
    throw new BadRequestError(
      'Veuillez fournir un nom valide entre 3 et 50 caractères.'
    );
  }

  const isValidEmail =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );

  if (!email || !isValidEmail) {
    throw new BadRequestError('Veuillez fournir un email valide.');
  }

  if (!password || password.length < 6) {
    throw new BadRequestError(
      'Veuillez fournir un mot de passe avec au moins 6 caractères.'
    );
  }

  // crypte le mot de passe
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  // insère l'utilisateur avec le mot de pass crypté
  const {
    rows: [user]
  } = await db.query(
    'INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *',
    [name, email, hashedPassword]
  );

  // génère le token
  const token = jwt.sign(
    { userID: user.user_id, name: user.name },
    process.env.JWT_SECRET,
    {
      expiresIn: process.env.JWT_LIFETIME
    }
  );

  res.status(StatusCodes.CREATED).json({ user: { name: user.name }, token });
};

const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    throw new BadRequestError('Veuillez remplir tous les champs');
  }

  const {
    rows: [user]
  } = await db.query('SELECT * FROM users WHERe email = $1', [email]);

  if (!user) {
    throw new UnauthenticatedError('Authentification invalide');
  }

  const isPasswordCorrect = await bcrypt.compare(password, user.password);

  if (!isPasswordCorrect) {
    throw new UnauthenticatedError('Authentification invalide');
  }

  const token = jwt.sign(
    { userID: user.user_id, name: user.name },
    process.env.JWT_SECRET,
    {
      expiresIn: process.env.JWT_LIFETIME
    }
  );

  res.status(StatusCodes.OK).json({ user: { name: user.name }, token });
};

module.exports = { register, login };
