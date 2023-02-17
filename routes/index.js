const express = require('express');

const productsRoutert = require('./products.router');
const usersRouter = require('./users.router');

function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/products', productsRoutert);
  router.use('/users', usersRouter);
}

module.exports = routerApi;
