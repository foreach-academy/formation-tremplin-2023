const { Router } = require('express');
const router = Router();

const {
  authenticateUser
} = require('../middlewares/authenticationMiddleware.js');
const {
  createItem,
  getAllUserItems,
  getSingleItem,
  updateItem,
  deleteItem
} = require('../controllers/itemsController.js');

router.use(authenticateUser);
router.route('/').get(getAllUserItems).post(createItem);
router.route('/:id').get(getSingleItem).put(updateItem).delete(deleteItem);

module.exports = router;
