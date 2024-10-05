const { Router } = require('express');

const {
  createUser,
  updateUser,
  deleteUser,
  listUser,
  updateAvatar,
  listAllUsers,
  forgotPassword,
} = require('../controllers/users.controlher');
const {
  verifyPayloadForCreation,
  verifyEmailToForgotPassword,
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

userRouters.get('/', listAllUsers);

userRouters.post('/forgot', verifyEmailToForgotPassword(), forgotPassword);

userRouters.patch('/:id', updateAvatar);

module.exports = userRouters;
