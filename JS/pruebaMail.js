




const nodemailer = require('nodemailer');




const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: '2036001806@utna.edu.mx',
    pass: '2036001806'
  }
});




function enviarMail(){
    const mail = document.getElementById('mail');

    const mailOptions = {
        from: mail,
        to: '2036001806@utna.edu.mx',
        subject: 'Correo de prueba',
        text: 'Este es un correo de prueba enviado desde JavaScript.'
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Correo enviado: ' + info.response);
        }
      });

}

