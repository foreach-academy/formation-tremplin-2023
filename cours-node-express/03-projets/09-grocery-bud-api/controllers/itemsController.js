const createItem = async (req, res) => {
  res.send('create item');
};

const getAllUserItems = async (req, res) => {
  console.log(req.user);
  res.send('get all user items');
};

const getSingleItem = async (req, res) => {
  res.send('get single item');
};

const updateItem = async (req, res) => {
  res.send('update item');
};

const deleteItem = async (req, res) => {
  res.send('delete item');
};

module.exports = {
  createItem,
  getAllUserItems,
  getSingleItem,
  updateItem,
  deleteItem
};
