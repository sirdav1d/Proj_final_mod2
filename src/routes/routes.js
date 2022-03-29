/** @format */

const routes = require('express').Router();
const ProdutoController = require('../controllers/ProdutoController')

routes.get('/', ProdutoController.getAll)

module.exports = routes;