// Importamos la dependencia
const { welcomeEmail } = require('./mailer');

const url = process.env.URL_FRONT || 'http://localhost:3000';
exports.recoveryPassword = (email, token) => {
  console.log('recover', email, token, url);
  return welcomeEmail({
    to: email,
    from: 'cindy280394@gmail.com',
    subject: `Recuperar contraseña de Make It real`,
    text:
      'Por favor haga clic en el siguiente enlace para resetear su contraseña',
    html: `
      <div>
        <h1>Cambio de contraseña</h1>
        <a href="${url}/password-reset/${token}">Recuperar constraseña</a>
      </div>`,
  });
};
