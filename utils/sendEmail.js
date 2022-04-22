const nodemailer = require("nodemailer");

const nodemailerFucntion = (email, subject, text) => {
  var transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    service: "gmail",
    port: 587,
    secure: false,
    auth: {
      user: "ts3657@gmail.com",
      pass: "",
    },
  });

  let mailOptions = {
    from: "ts3657@gmail.com",
    to: email,
    subject: subject,
    text: text,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
};

module.exports = nodemailerFucntion;
