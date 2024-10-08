/**
 * Controller controla todo o fluxo de entrada e saida dos dados da aplicação
 */
const usersRepository = require('../../repositories/repository');

const MailProvider = require('../../../../shared/providers/MailProvider');

const CreateUserService = require('../../services/CreateUserService');

const ListAllUsersService = require('../../services/ListAllUsersService');

module.exports = {
  async createUser(request, response) {
    const { name, email, password } = request.body;
    const createUser = new CreateUserService(usersRepository);
    const user = await createUser.execute({
      name,
      email,
      password,
    });
    return response.json({ data: user });
  },

  async updateUser(request, response) {
    return response.json({ message: 'User updated' });
  },

  async deleteUser(request, response) {
    return response.json({ message: 'User deleted' });
  },

  async listUser(request, response) {
    return response.json({ message: 'User listed' });
  },

  async listAllUsers(request, response) {
    const listAllUsers = new ListAllUsersService(usersRepository);

    const users = await listAllUsers.execute();
    return response.json({ data: users });
  },

  async updateAvatar(request, response) {
    return response.json({ message: 'Avatar updated' });
  },

  async forgotPassword(request, response) {
    return response.json({ message: 'Password forgotten' });
  },
};
