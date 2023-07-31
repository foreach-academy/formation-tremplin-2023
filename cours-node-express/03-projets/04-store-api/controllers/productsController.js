const db = require('../db');

const getAllProductsStatic = async (req, res) => {
  //* démo pour filter les réponses
  //* recherche par nom
  // const { rows } = await db.query(
  //   "SELECT * FROM products WHERE name ILIKE '%albany%'"
  // );

  // const search = 'ab';
  // const { rows } = await db.query(
  //   "SELECT * FROM products WHERE name ILIKE concat('%', $1::VARCHAR ,'%')",
  //   [search]
  // );

  // //* tri
  // const { rows } = await db.query(
  //   'SELECT * FROM products ORDER BY name DESC, price ASC'
  // );

  //* filtre les champs
  const { rows } = await db.query('SELECT name,price FROM products');

  res.status(200).send({ products: rows, count: rows.length });
};

const getAllProducts = async (req, res) => {
  const { search, sort, fields } = req.query;

  let queryString = 'SELECT * FROM products';
  let parameters = [];

  // filtre les champs
  if (fields) {
    queryString = `SELECT ${fields} FROM products`;
  }

  // recherche par nom
  if (search) {
    queryString = `${queryString} WHERE name ILIKE $1`;
    parameters.push(`%${search}%`);
  }

  // tri
  if (sort) {
    const sortList = sort
      .split(',')
      .map((field) =>
        field.startsWith('-') ? `${field.slice(1)} DESC` : field
      )
      .join(',');
    queryString = `${queryString} ORDER BY ${sortList}`;
  }

  // pagination + limite
  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 10;
  const offset = (page - 1) * limit;

  queryString = `${queryString} LIMIT $${parameters.length + 1} OFFSET $${
    parameters.length + 2
  }`;
  // 23 produits, limit = 7
  // 4 pages, 7 7 7 2
  parameters.push(limit, offset);

  const { rows: products } = await db.query(queryString, parameters);

  res.status(200).send({ products, count: products.length });
};

module.exports = { getAllProductsStatic, getAllProducts };
