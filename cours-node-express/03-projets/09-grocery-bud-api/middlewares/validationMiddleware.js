const { body, validationResult } = require('express-validator');
const { BadRequestError } = require('../errors/index.js');
const db = require('../db');

const withValidationErrors = (validateValues) => {
  return [
    validateValues,
    (req, _res, next) => {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        const errorMessages = errors.array().map((error) => error.msg);
        throw new BadRequestError(errorMessages);
      }

      next();
    }
  ];
};

//  test
const validateTest = withValidationErrors([
  body('name')
    .trim()
    .notEmpty()
    .withMessage('Le nom est requis')
    .isLength({ min: 3, max: 50 })
    .withMessage('Le nom doit contenir entre 3 et 50 caractères')
    .escape()
]);

const validateRegisterInput = withValidationErrors([
  body('name').trim().notEmpty().withMessage('Le nom est requis').escape(),
  body('email')
    .trim()
    .notEmpty()
    .withMessage("L'email est requis")
    .isEmail()
    .withMessage("Format d'email non valide")
    .escape()
    .custom(async (email) => {
      const {
        rows: [user]
      } = await db.query('SELECT * FROM users WHERE email = $1', [email]);

      if (user) {
        throw new Error("L'email existe déjà");
      }
    }),
  body('password')
    .trim()
    .notEmpty()
    .withMessage('Le mot de passe est requis')
    .escape()
]);

const validateLoginInput = withValidationErrors([
  body('email')
    .trim()
    .notEmpty()
    .withMessage("L'email est requis")
    .isEmail()
    .withMessage("Format d'email non valide")
    .escape(),
  body('password')
    .trim()
    .notEmpty()
    .withMessage('Le mot de passe est requis')
    .escape()
]);

module.exports = { validateTest, validateLoginInput, validateRegisterInput };
