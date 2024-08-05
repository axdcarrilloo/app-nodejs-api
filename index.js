const express = require('express');
const router = require('./routes');
const { conexionDB } = require('./database/conexion.database');
const { errorHandler, boomErrorHandler } = require('./middlewares/error.handler');
const cors = require('cors');

const app = express();
const port = 2010;
app.use(express.json());

app.use(cors());

router(app);

app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, async() => {
  if(await conexionDB()) {
    console.log(`index.js - app.listen() -> app-nodejs-api Ejecutando en http://localhost:${port}`);
  } else {
    console.log(`index.js - app.listen() -> app-nodejs-api Ejecutando sin conexion a la DB`);
  }
});

