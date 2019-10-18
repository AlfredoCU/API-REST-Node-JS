/* jshint esversion: 6 */

// Cargamos el módulo de express para poder crear rutas.
const route = require('express').Router(); // Llamamos al método Router().

// Cargamos nustras rutas de usuarios y mensajes.
const usersRoute = require('./usersRoute');
const messagesRoute = require('./messagesRoute');

// Creamos una ruta por defecto y solicitamos las rutas ya creadas.
route
  .get('/', (req, res) => res.send('Hello World!'))
  .use('/users', usersRoute)
  .use('/messages', messagesRoute);

// Exportamos la configuración (las rutas).
module.exports = route;