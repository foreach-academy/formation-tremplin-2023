const db = require('../db');
const { StatusCodes } = require('http-status-codes');

const getAllItems = async (_req, res) => {
  const { rows: items } = await db.query('SELECT * FROM items');
  res.status(StatusCodes.OK).json({ count: items.length, items });
};

const createItem = async (req, res) => {
  const { name } = req.body;
  const { userId } = req.user;

  const {
    rows: [createdItem]
  } = await db.query(
    'INSERT INTO items (name, user_id) VALUES ($1, $2) RETURNING *',
    [name, userId]
  );

  res
    .status(StatusCodes.CREATED)
    .json({ msg: 'Article créé', item: createdItem });
};

const getAllUserItems = async (req, res) => {
  const { rows: items } = await db.query(
    'SELECT * FROM items WHERE user_id = $1 ORDER BY item_id',
    [req.user.userId]
  );
  res.status(StatusCodes.OK).json({ count: items.length, items });
};

const getSingleItem = async (req, res) => {
  const { id } = req.params;

  const {
    rows: [item]
  } = await db.query('SELECT * FROM items WHERE item_id = $1', [id]);

  res.status(StatusCodes.OK).json({ item });
};

const updateItem = async (req, res) => {
  const { id } = req.params;
  const { completed } = req.body;

  const {
    rows: [updatedItem]
  } = await db.query(
    'UPDATE items SET completed = $1 WHERE item_id = $2 RETURNING *',
    [completed, id]
  );

  res
    .status(StatusCodes.OK)
    .json({ msg: 'Article modifié', item: updatedItem });
};

const deleteItem = async (req, res) => {
  const { id } = req.params;

  const {
    rows: [deletedItem]
  } = await db.query('DELETE FROM items WHERE item_id = $1 RETURNING *', [id]);

  res
    .status(StatusCodes.OK)
    .json({ msg: 'Article supprimé', item: deletedItem });
};

module.exports = {
  createItem,
  getAllUserItems,
  getSingleItem,
  updateItem,
  deleteItem,
  getAllItems
};
