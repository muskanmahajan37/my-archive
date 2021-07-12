const nodemailer = require('nodemailer');

const sendEmail = (options) => {
    const transporter = nodemailer.createTransport({
        service: process.env.EMAIL_SERVICE,
        auth: {
            user: process.env.EMAIL_USERNAME,
            pass: process.env.EMAIL_PASSWORD
        }
    })

    const mailOptions = {
        from: process.env.EMAIL_FROM,
        to: options.to,
        subject: options.subject,
        html: options.text
    }

    transporter.sendMail(mailOptions, function(err, info) {
        if(err) {
          console.log("Error Occurs")
        }
        console.log("Email sent!")
    })
}

// const sendEmail = (option) => {
//     Email.send({
//         SecureToken : process.env.SECURE_TOKEN,
//         To : option.to,
//         From : process.env.EMAIL_FROM,
//         Subject : option.subject,
//         Body : option.text
//     }).then(
//       message => alert('message has been sent!')
//     );
// }

module.exports = sendEmail;