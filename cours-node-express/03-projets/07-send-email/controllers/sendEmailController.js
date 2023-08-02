const { StatusCodes } = require('http-status-codes');
const nodemailer = require('nodemailer');

const sendEmail = async (_req, res) => {
  const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
      user: 'lukas.bernier@ethereal.email',
      pass: 'hWgwBp4ND7RGQ3zVPX'
    }
  });

  await transporter.sendMail({
    from: '"ForEach Academy 👻" <foreach-academy@gmail.com>', // adresse de l'envoyeur
    to: 'lukas.bernier@ethereal.email', // liste des destinataires
    subject: 'Hello ✔', // sujet de l'email
    html: '<b>Hello world?</b>' // html body
  });

  res.status(StatusCodes.OK).json({ msg: 'Email envoyé' });
};

module.exports = sendEmail;
