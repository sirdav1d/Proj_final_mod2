const routes = require('express').Router();
const ProdutoController = require('../controllers/ProdutoController.js');

routes.get('/', ProdutoController.getAll);

routes.get('/cadastro', ProdutoController.rota_cad);

routes.get('/detalhes/:id', ProdutoController.rota_det);

routes.post('/create', ProdutoController.create);

routes.get("/getById/:id/:method", ProdutoController.getById);

routes.post('/update/:id', ProdutoController.update);

routes.get('/remove/:id/', ProdutoController.remove);



module.exports = routes;
