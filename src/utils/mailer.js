// Importamos la dependencia
const sgMail = require('@sendgrid/mail');

// Pasamos el apikey
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// Vamos a crear la promesa para hacer la conexión del correo
exports.welcomeEmail = async (msg) => {
  console.log('meess');
  try {
    await sgMail.send(msg);
    console.log('Message sent successfully');
  } catch (error) {
    console.error(error);

    if (error.response) {
      console.error(error.response.body);
    }
  }
};
