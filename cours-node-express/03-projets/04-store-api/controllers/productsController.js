const getAllProductsStatic = (req, res) => {
  res.send('get all products static');
};

const getAllProducts = (req, res) => {
  res.send('get all products');
};

module.exports = { getAllProductsStatic, getAllProducts };
