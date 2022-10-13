const http = require('http');
const nodemailer = require('nodemailer');
const express = require('express');
require('dotenv').config();

const btn = document.getElementById('formBtn');

const inputArea = document.getElementById('inputArea');
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'alimsadullaev18@gmail.com',
        pass: process.env.NODEMAILER_PASS,
    },
});

let mailOptions = {
    from: 'alimsadullaev18@gmail.com',
    to: 'sadullaev.alim@mail.ru',
    subject: 'html test message',
    text: undefined,
};

inputArea.onchange = () => {
    mailOptions.text = inputArea.innerText;
    console.log(mailOptions.text);
}


btn.onclick = () => {
    transporter.sendMail(mailOptions, (err)=>{
        if (err) {
            console.log(err);
        } else {
            console.log('mail has been sent successfully');
        };
    })
}
