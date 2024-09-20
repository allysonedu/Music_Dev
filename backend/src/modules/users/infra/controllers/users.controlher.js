const { response } = require('express');

class UsersController {
  async createUsers(request, request) {
    return response.json({ create: true });
  }
  async getAllUsers(request, request) {
    return response.json({ getAll: true });
  }
  async updateUsers(request, request) {
    return response.json({ update: true });
  }
  async deleteUsers(request, request) {
    return response.json({ delete: true });
  }
}

module.exports = UsersController;
