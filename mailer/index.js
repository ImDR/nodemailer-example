const nodemailer = require('nodemailer');

module.exports = function mailer(to, subject){
    return function(html){
        return new Promise(function(resolve, reject){
            let transporter = nodemailer.createTransport({
                host: 'host1.crownstack.online',
                port: 465,
                secure: true, // true for 465, false for other ports
                auth: {
                    user: "info@crownstack.online", // generated ethereal user
                    pass: "cP3E)70q-^Uz" // generated ethereal password
                }
            });
            
            let mailOptions = {
                from: '"Fred Foo" <foo@example.com>', // sender address
                to: to, // list of receivers
                subject: subject, // Subject line
                html: html // html body
            };
            
            transporter.sendMail(mailOptions, (error, info) => {
                if (error) reject(error);
                else resolve(info);
            });
        });
    }
}