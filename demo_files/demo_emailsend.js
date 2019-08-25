var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'abela.torres91@gmail.com',
        pass: 'happy2424Torres!'
    }
});

var mailOptions = {
    from: 'abela.torres91@gmail.com',
    to: 'abelardot_91@hotmail.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
        console.log(error);
        //Error since it requires two-factor authentication
    } else {
        console.log('Email sent: ' + info.response);
    }
});