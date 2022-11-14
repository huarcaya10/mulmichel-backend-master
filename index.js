const express = require('express');
const routerApi = require('./routes/product');
const routerApi11 = require('./routes/empleado');
const routerApi2 = require('./routes/venta');
const routerApi3 = require('./routes/cliente');
//const { use } = require('./routes/product.router');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/',(req, res) => {
  res.send('hi from server express');
});


//derivando toda la resolución de rutas a la ruta /routes/
routerApi11(app);
routerApi(app);
routerApi2(app);
routerApi3(app);


app.listen(port, () => {
  console.log("Express active in port: "+port);
});
