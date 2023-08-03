const express = require('express');
const router = express.Router();

const uploadImage = require('../controllers/uploadsController.js');
const {
  createProduct,
  getAllProducts
} = require('../controllers/productsController.js');

router.route('/uploads').post(uploadImage);
router.route('/').post(createProduct).get(getAllProducts);

module.exports = router;
