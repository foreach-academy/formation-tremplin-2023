const { Router } = require('express');
const router = Router();

const {
  validateLoginInput,
  validateRegisterInput
} = require('../middlewares/validationMiddleware.js');
const { register, login } = require('../controllers/authControllers.js');

router.post('/register', validateRegisterInput, register);
router.post('/login', validateLoginInput, login);

module.exports = router;
