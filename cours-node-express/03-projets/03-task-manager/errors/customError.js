class CustomError extends Error {
  constructor(message, statusCode) {
    // invoque le constructeur du parent
    super(message);
    this.statusCode = statusCode;
  }
}

module.exports = CustomError;
