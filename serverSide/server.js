const http = require('http');
const nodemailer = require('nodemailer');
const express = require('express');

let app = express();

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'alimsadullaev18@gmail.com',
        pass: 'sxgnmljreanslqfo',
    },
});

let mailOptions = {
    from: 'alimsadullaev18@gmail.com',
    to: 'maratsadullaev@mail.ru',
    subject: 'html test message',
    text: 'nothing',
    html: '<div>' + '<b>hello, Marat</b>' +
        '</div>'
};

transporter.sendMail(mailOptions, (err)=>{
    if (err) {
        console.log(err);
    } else {
        console.log('mail has been sent successfully');
    };
})
