const { Router } = require('express');

const {
  createUser,
  updateUser,
  deleteUser,
  listUser,
  updateAvatar,
} = require('../controllers/users.controlher');
const {
  verifyPayloadForCreation,
} = require('../../middlewares/users.middleware');
const userRouters = Router();

/**
 * DELETE - remoção
 *
 * CRUD - Create, Read, Update, Delete
 *
 * As rotas tem a responsabilidade de roteamento das requisições (Entrada e Saida)
 */

userRouters.post('/', verifyPayloadForCreation(), createUser);

userRouters.put('/:id', updateUser);

userRouters.delete('/:id', deleteUser);

userRouters.get('/:id', listUser);

userRouters.patch('/:id', updateAvatar);

module.exports = userRouters;
