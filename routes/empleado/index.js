const express = require('express');
//const router = require('./empleados.router');
const empleadosRouter = require('./empleado.router');

function routerApi11(app){
   const routerv1 = express.Router();
   app.use('/api/v1',routerv1);
   routerv1.use('/empleados',empleadosRouter);
  }

module.exports  = routerApi11;
