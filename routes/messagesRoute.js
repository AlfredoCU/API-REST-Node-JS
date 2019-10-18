/* jshint esversion: 6 */

// Cargamos el módulo de express para poder crear rutas.
const express = require('express');

// Cargamos el controlador.
const { messagesController } = require('../controllers');

// Llamamos al método Router().
const route = express.Router();

// Creamos las rutas asignando sus controladores.
route
  .get('/', messagesController.showAll)
  .get('/:id', messagesController.showOne)
  .post('/', messagesController.create)
  .put('/:id', messagesController.update)
  .delete('/:id', messagesController.remove)
  .patch('/:id', messagesController.patch);

// Exportamos la configuración (las rutas).
module.exports = route;