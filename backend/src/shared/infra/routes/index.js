const { Router } = require('express');

const userRouters = require('../../../modules/users/infra/routes/user.routes');

const loginRouters = require('../../../modules/users/infra/routes/login.routes');

const routes = Router();

routes.use('/users', userRouters);

routes.use('/login', loginRouters);

module.exports = routes;
