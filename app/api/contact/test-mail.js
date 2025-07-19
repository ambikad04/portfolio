const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'ambikadas0412@gmail.com',
    pass: 'tbjsyqgfyltnwlbq',
  },
});

transporter.sendMail({
  from: 'ambikadas0412@gmail.com',
  to: 'ambikadas0412@gmail.com',
  subject: 'Test Email',
  text: 'This is a test email from Node.js',
}, (error, info) => {
  if (error) {
    return console.log('Error:', error);
  }
  console.log('Email sent:', info.response);
});