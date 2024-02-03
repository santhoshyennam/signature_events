const nodemailer = require('nodemailer');

exports.sendMail = (content) => {    
      // Create a transporter object
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'signatureeventsdecormaster@gmail.com',
          pass: 'jtelzceesjjdkrhj'
        }
      });
    
      // Define the email options
      const mailOptions = {
        from: 'signatureeventsdecormaster@gmail.com',
        to:'signatureeventsdecormaster@gmail.com',
        subject:"You have an Order!",
        text: JSON.stringify(content)
      };
    
      // Send the email
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.log('Error sending email:', error);
        } else {
          console.log('Email sent successfully:', info.response);
        }
      });
    
}

