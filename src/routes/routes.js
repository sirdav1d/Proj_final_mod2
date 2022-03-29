/** @format */

const routes = require('express').Router();
const ProdutoController = require('../controllers/ProdutoController.js');

routes.get('/', ProdutoController.getAll);

routes.get('/cadastro', ProdutoController.create);

routes.get('/detalhes', ProdutoController.show);

module.exports = routes;
