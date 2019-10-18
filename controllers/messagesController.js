/* jshint esversion: 6 */

exports.showAll = (req, res) => {
  res.send('Show all messages');
};

// Esta propiedad "req.params" es un objeto que contiene propiedades asignadas a los "parámetros" de la ruta nombrada. Este objeto por defecto es {}.
exports.showOne = (req, res) => {
  res.send(req.params.id);
};

// Contiene pares de datos clave - valor enviados en el cuerpo de la solicitud. Cuerpo como express.json() o express.urlencoded().
exports.create = (req, res) => {
  res.send(req.body);
};

exports.update = (req, res) => {
  res.send(req.body);
};

exports.remove = (req, res) => {
  res.send(req.body);
};

exports.patch = (req, res) => {
  res.send(req.body);
};