/** @format */

const routes = require('express').Router();
const ProdutoController = require('../controllers/ProdutoController.js');

routes.get('/', ProdutoController.getAll);

routes.get('/cadastro', ProdutoController.rota_cad);

routes.get('/detalhes', ProdutoController.rota_det);

module.exports = routes;
