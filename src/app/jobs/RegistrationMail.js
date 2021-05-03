import Mail from '../lib/Mail'

export default {
  key: 'RegistrationMail',
  options: {
    delay: 5000,
    priority: 3
  },
  async handle({ data }) {
    const { user } = data

    await Mail.sendMail2({
      from: 'TEST <testando@teste.com>',
      to: `${user.name} <${user.email}>`,
      subject: 'Cadastro de usuário',
      html: `Olà ${user.name}, enviando meu primeiro email pelo back-end.`
    })
  }
}


