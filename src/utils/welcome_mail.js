const { welcomeEmail } = require('./mailer');
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
