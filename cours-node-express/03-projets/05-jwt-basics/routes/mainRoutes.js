const express = require('express');
const router = express.Router();

const authenticate = require('../middlewares/auth.js');

const { login, dashboard } = require('../controllers/mainController.js');

router.route('/dashboard').get(authenticate, dashboard);
router.route('/login').post(login);

module.exports = router;
