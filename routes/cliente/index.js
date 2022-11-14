const express = require('express');
//const router = require('./clientes.router')
const clientesRouter = require('./cliente.router')

function routerApi3(app){
    const routerv1 = express.Router();
    app.use('/api/v1',routerv1);
    routerv1.use('/clientes',clientesRouter);
   }

 module.exports  = routerApi3;
