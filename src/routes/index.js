const { Router } = require('express');

const usersRoutes = require('./users.routes');
const ingredientesRoutes = require('./ingredientesRoutes');
const pratosRoutes = require('./pratosRoutes');

const routes = Router();

routes.use('/users', usersRoutes);
routes.use('/ingredientes', ingredientesRoutes);
routes.use('/pratos', pratosRoutes);

module.exports = routes;
