const { Router } = require('express');
const router = Router();

const {
  authenticateUser,
  authorizePermissions
} = require('../middlewares/authenticationMiddleware.js');

const {
  validateAddItemInput,
  validateUpdateItemInput,
  validateIdParam
} = require('../middlewares/validationMiddleware.js');

const {
  createItem,
  getAllUserItems,
  getSingleItem,
  updateItem,
  deleteItem,
  getAllItems
} = require('../controllers/itemsController.js');

router.use(authenticateUser);
router.route('/admin').get(authorizePermissions('admin'), getAllItems);
router.route('/').get(getAllUserItems).post(validateAddItemInput, createItem);
router
  .route('/:id')
  .get(validateIdParam, getSingleItem)
  .put([validateIdParam, validateUpdateItemInput], updateItem)
  .delete(validateIdParam, deleteItem);

module.exports = router;
