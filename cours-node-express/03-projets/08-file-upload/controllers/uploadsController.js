const { StatusCodes } = require('http-status-codes');
const { BadRequestError } = require('../errors');
const path = require('path');
const cloudinary = require('cloudinary').v2;
const fs = require('fs');

const uploadProductImageLocal = async (req, res) => {
  // vérifie si le fichier existe
  if (!req.files) {
    throw new BadRequestError('Pas de fichier uploadé');
  }

  const productImage = req.files.image;

  // vérifie le format
  if (!productImage.mimetype.startsWith('image')) {
    throw new BadRequestError('Veuillez uploader une image');
  }

  // vérifie la taille
  // teste l'erreur
  // const maxsize = 1000; // en kb

  const maxsize = 1024 * 1024; // 1mb

  if (productImage.size > maxsize) {
    throw new BadRequestError(
      'Veuillez uploader une image plus petite que 1mb'
    );
  }

  // stocke l'image
  const imagePath = path.join(
    __dirname,
    `../public/uploads/${productImage.name}`
  );
  await productImage.mv(imagePath);

  res
    .status(StatusCodes.OK)
    .json({ image: { src: `/uploads/${productImage.name}` } });
};

const uploadImage = async (req, res) => {
  if (!req.files) {
    throw new BadRequestError('Pas de fichier uploadé');
  }

  // upload l'image
  const result = await cloudinary.uploader.upload(
    req.files.image.tempFilePath,
    {
      use_filename: true,
      folder: 'file-upload'
    }
  );

  // supprime le fichier temporaire
  fs.unlinkSync(req.files.image.tempFilePath);

  res.status(StatusCodes.OK).json({ image: { src: result.secure_url } });
};

module.exports = uploadImage;
