/* jshint esversion: 6 */

// Crea una aplicación Express.
const express = require('express');

// Middleware de análisis del cuerpo. Dispolible bajo la propiedad de req.body.
const bodyParser = require('body-parser');

// La función express() es una función de nivel superior exportada por el módulo express.
const app = express();

// Importamos las rutas
const routes = require('./routes');

app
  // body-parser.
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({ extended: true }))
  // Creamos una ruta de bienvedia.
  .get('/', (req, res) => res.send('Welcome!'))
  // Cargamos las rutas.
  .use('/api', routes)
  // Que puerto arrancara el servidor y un mensaje en consola.
  .listen(3000, () => console.log('App listening on port 3000!'));
  
// Exportamos la configuración.
module.exports = app;