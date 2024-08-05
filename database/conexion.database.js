
const mongoose = require('mongoose');

/*async function disconexionDB() {
  try {
    await mongoose.disconnect();
    console.log('conexion.database.js - disconexionDB() -> MongoDB desconectado');
  } catch (err) {
      console.error(err);
  }
}*/

async function conexionDB() {
  return await mongoose.connect('mongodb://localhost:27017/logins')
  .then(() => {
    console.log('conexion.database.js - conexionDB() -> MongoDB conectado');
    return true;
  }).catch((err) => {
    if (mongoose.connection.readyState !== 1) {
      console.log('conexion.database.js - conexionDB() -> La base de datos no está conectada '+ err.message);
      return false;
    }
  });
}

module.exports = { conexionDB };
