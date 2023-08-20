const { Router } = require('express');
const router = Router();

const {
  validateLoginInput,
  validateRegisterInput
} = require('../middlewares/validationMiddleware.js');
const { register, login } = require('../controllers/authControllers.js');

const rateLimiter = require('express-rate-limit');

const apiLimiter = rateLimiter({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 20, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
  message: { msg: 'IP rate limit exceeded, retry in 15 minutes.' }
});

router.post('/register', apiLimiter, validateRegisterInput, register);
router.post('/login', apiLimiter, validateLoginInput, login);

module.exports = router;
