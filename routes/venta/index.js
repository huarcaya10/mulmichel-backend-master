const express = require('express');
const ventasRouter = require('./venta.router');

function routerApi2(app){
  const routerV1 = express.Router();
  app.use('/api/v1',routerV1);
  routerV1.use('/ventas',ventasRouter)
}

module.exports = routerApi2;
