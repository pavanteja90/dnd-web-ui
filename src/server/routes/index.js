var express = require('express');
var router = express.Router();
const nodemailer = require('nodemailer');
var cryptoJS = require("crypto-js");
const hashSalt = "UEA1NSMkc28td2VyI3NhU3FhYUpGa2lpUFBrQW5zZi8vP3hjYW5pYSNAUXNmZGxkYXM9MSlhc2ZhZj9qYW9wIjphc2ZbMjAwaW1mYWZnaGp0ZTl1cTNubG9hYWRSRkRGQWZhaGZuaXFw";

router.post('/email', function (req, res, next) {
  const body = req.body;
  const { senderName, senderEmail, senderPasswordHash, receiverEmail, subject, message } = body;
  // create reusable transporter object using the default SMTP transport
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: senderEmail, // generated ethereal user
      pass: password  // generated ethereal password
    }
  });
  // Encrypt
  // var ciphertext = cryptoJS.AES.encrypt('my message', 'secret key 123').toString();

  // Decrypt
  var bytes = cryptoJS.AES.decrypt(senderPasswordHash, hashSalt);
  var password = bytes.toString(CryptoJS.enc.Utf8);

  // send mail with defined transport object
  transporter.sendMail({
    from: senderName + ',' + senderEmail, // sender address
    to: receiverEmail, // list of receivers
    subject, // Subject line
    html: message

  }).then(() => {
    res.json({
      error: false,
      message: "Success",
    })
  }).catch(err => {
    res.json({
      error: true,
      message: "An error occured. Unable to send email to " + receiverEmail,
    })
  })

});

module.exports = router;
