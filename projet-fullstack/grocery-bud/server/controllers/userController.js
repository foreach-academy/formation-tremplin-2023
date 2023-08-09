const db = require('../db');
const { StatusCodes } = require('http-status-codes');

const getUser = async (req, res) => {
  const {
    rows: [user]
  } = await db.query('SELECT * FROM users WHERE user_id = $1', [
    req.user.userId
  ]);
  delete user.password;
  res.status(StatusCodes.OK).json({ user });
};

module.exports = { getUser };
