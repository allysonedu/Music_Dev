const usersRepository = require('../../repositories/repository');

const LoginService = require('../../services/LoginService');

module.exports = {
  async userLogin(request, response) {
    const { email, password } = request.body;

    const loginService = new LoginService(usersRepository);

    const user = await loginService.execute({ email, password });

    return response.json(user);
  },
};
