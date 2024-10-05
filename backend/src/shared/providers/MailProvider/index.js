const nodemailer = require('nodemailer');

class MailProvider {
  /**
   * Faz a conexão com o servidor de email
   */

  constructor() {
    this.transporter = nodemailer.createTransport({
      host: 'sandbox.smtp.mailtrap.io',
      port: 25,
      debug: true,
      logger: true,

      auth: {
        user: 'd4e845f6f9e6ab',
        pass: 'ee73f533752a60',
      },
    });
  }

  async sendMail(email, subject, template) {
    await this.transporter.sendMail({
      from: 'Equipe SpotList <AllysonEduu@gmail.com>',
      to: email,
      subject,
      html: template,
    });
  }
}

module.exports = MailProvider;
