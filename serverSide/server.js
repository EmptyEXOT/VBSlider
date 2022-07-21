const http = require('http');
const mailer = require('nodemailer')

let transporter = mailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'alimsadullaev18@gmail.com',
        pass: 'Az9Jf0rr67',
    },
});

let mailOptions = {
    from: 'alimsadullaev18@gmail.com',
    to: 'sadullaev.alim@mail.ru',
    subject: 'that mail has been sent via node.js',
    text: 'test mail',
};

transporter.sendMail(mailOptions, ()=>{
    if (err) {
        console.log('sending error');
    } else {
        console.log('mail has been sent successfully');
    };
})


http.createServer(()=>{
}).listen(8080);