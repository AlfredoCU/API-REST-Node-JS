/* jshint esversion: 6 */

// Cargamos el módulo de express para poder crear rutas.
const express = require('express');

// Cargamos el controlador.
const { usersController } = require('../controllers');

// Llamamos al método Router().
const route = express.Router();

// Creamos las rutas asignando sus controladores.
route
  // Login users.
  .post('/login', usersController.login)
  .get('/signoff', usersController.signOff)
  // Users.
  .get('/', usersController.showAll)
  .get('/:id', usersController.showOne)
  .post('/', usersController.create)
  .put('/:id', usersController.update)
  .delete('/:id', usersController.remove)
  .patch('/:id', usersController.patch);

// Exportamos la configuración (las rutas).
module.exports = route;