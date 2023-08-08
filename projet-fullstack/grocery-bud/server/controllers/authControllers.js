const { BadRequestError } = require('../errors');
const db = require('../db');
const { StatusCodes } = require('http-status-codes');
const { createJWT } = require('../utils/tokenUtils.js');
const { hashPassword, comparePassword } = require('../utils/passwordUtils.js');

const register = async (req, res) => {
  const { name, email, password } = req.body;

  const {
    rows: [{ count }]
  } = await db.query('SELECT COUNT(*) FROM users');
  const isFirstAccount = Number(count) === 0;
  const role = isFirstAccount ? 'admin' : 'user';

  const hashedPassword = await hashPassword(password);

  const {
    rows: [user]
  } = await db.query(
    'INSERT INTO users (name, email, password, role) VALUES ($1, $2, $3, $4) RETURNING *',
    [name, email, hashedPassword, role]
  );

  const token = createJWT({
    userId: user.user_id,
    name: user.name,
    role: user.role
  });

  res
    .status(StatusCodes.CREATED)
    .json({ msg: 'Utilisateur enregistré', token });
};

const login = async (req, res) => {
  const { email, password } = req.body;

  const {
    rows: [user]
  } = await db.query('SELECT * FROM users WHERE email = $1', [email]);

  if (!user) {
    throw new BadRequestError('Identifiants invalides');
  }

  const isPasswordCorrect = await comparePassword(password, user.password);

  if (!isPasswordCorrect) {
    throw new BadRequestError('Identifiants invalides');
  }

  const token = createJWT({
    userId: user.user_id,
    name: user.name,
    role: user.role
  });

  res.status(StatusCodes.OK).json({ msg: 'Utilisateur connecté', token });
};

module.exports = { register, login };
