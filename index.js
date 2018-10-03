const mailer = require('./mailer');
const verifyEmail = require('./mailer/templates/verifyEmail');

mailer('dineshrawataias@gmail.com', "demo")(verifyEmail("dinesh"))
.then(data => {
    console.log(data);
})
.catch(err => {
    console.log(err);
})