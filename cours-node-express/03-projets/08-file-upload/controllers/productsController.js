const db = require('../db');
const { StatusCodes } = require('http-status-codes');
const { BadRequestError } = require('../errors');

const createProduct = async (req, res) => {
  const { name, price, image } = req.body;

  if (!name || !price || !image) {
    throw new BadRequestError('Veuillez remplir tous les champs');
  }

  const {
    rows: [product]
  } = await db.query(
    'INSERT INTO products (name, price, image) VALUES($1, $2, $3) RETURNING *',
    [name, price, image]
  );

  res.status(StatusCodes.CREATED).json({ product });
};

const getAllProducts = async (_req, res) => {
  const { rows: products } = await db.query('SELECT * FROM products');
  res.status(StatusCodes.OK).json({ products });
};

module.exports = { createProduct, getAllProducts };
