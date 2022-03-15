// Importamos la dependencia
const sgMail = require('@sendgrid/mail');

// Pasamos el apikey
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// Vamos a crear la promesa para hacer la conexión del correo
const welcomeEmail = async (msg) => {
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

// Por último vamos a ejecutar la promesa con un objeto
// que va a indicar los campos del email

exports.sendMail = (user) => {
  return welcomeEmail({
    to: user.email,
    from: 'cindy280394@gmail.com',
    subject: `Bienvenido ${user.name} a Make It Real`,
    text: "¡Don't stop learning!",
  });
};
