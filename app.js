// GETTING THE DEPENDENCIES THET WE INSTALLED

const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const nodemailer = require('nodemailer');
const path = require('path');

const app = express();

//view engine setup
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// static folder
app.use('/public', express.static(path.join(__dirname, 'public')));


// body parser middleware
app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json());

app.get('/', (req, res)=> {
    res.render('contact', {layout: false});
});
app.post('/send', (req, res)=>{
    const output = `
    <p>You have a new contact request </p>
    <h3> Contact details</h3>
    <ul>
      <li>Name: ${req.body.name}</li>
      <li>Company: ${req.body.company}</li>
      <li>Email: ${req.body.email}</li>
      <li>Phone: ${req.body.phone}</li>
    </ul>
    <h3>Message</h3>
    <p>${req.body.message}</p>
    `;

    "use strict";
const nodemailer = require("nodemailer");

// async..await is not allowed in global scope, must use a wrapper
    async function main() {
        // Generate test SMTP service account from ethereal.email
        // Only needed if you don't have a real mail account for testing
        let testAccount = await nodemailer.createTestAccount();
      
        // create reusable transporter object using the default SMTP transport

    let transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
          user: testAccount.user, // generated ethereal user
          pass: testAccount.pass, // generated ethereal password
        },
        tls: {
            rejectUnauthorized: false
        }
      });
    
      // send mail with defined transport object
      let info = await transporter.sendMail({
        from: '"Fred Foo 👻" <foo@example.com>', // sender address
        to: "snehithasai1997@gmail.com", // list of receivers
        subject: "Hello ✔", // Subject line
        text: "Hello world?", // plain text body
        html: output // html body
      });
    
      console.log("Message sent: %s", info.messageId);
      // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
    
      // Preview only available when sending through an Ethereal account
      console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
      // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
      res.render('contact',{layout: false});
    }
    
    main().catch(console.error);
})

app.listen(3000, () => console.log('server started...'));