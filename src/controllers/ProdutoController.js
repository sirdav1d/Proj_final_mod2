/** @format */

const Produto = require('../models/produto.js');

const getAll = async (req, res) => {
	try {
		const estoque = await Produto.findAll();
		res.render('index', {
			estoque,
			produto: undefined,
			produtoPut: null,
			produtoDel: null
		});
	} catch (err) {
		res.status(500).send({ err: err.message });
	}
};

const rota_cad = (req, res) => {
	try {
		res.render('cadastro');
	} catch (err) {
		res.status(500).send({ err: err.message });
	}
};

const rota_det = async (req, res) => {
	try {
		const produto = await Produto.findByPk(req.params.id);
		res.render('detalhes', {
			produto,
		});
	} catch (err) {
		res.status(500).send({ err: err.message });
	}
};

const create = async (req, res) => {
	try {
		const produto = req.body;

		if (!produto) {
			return res.redirect('/cadastro');
		}
		await Produto.create(produto);
		res.redirect('/');
	} catch (err) {
		res.status(500).send({ err: err.message });
	}
};

const getById = async (req, res) => {
	try {
		const method = req.params.method;
		const estoque = await Produto.findAll();
		const produto = await Produto.findByPk(req.params.id);

		if (method == 'put') {

			res.render('index', {
				estoque,
				produtoPut: produto,
				produtoDel: null
			});
		} else {
			res.render('index', {
				estoque,
				produtoPut: null,
				produtoDel: produto
			});
		}
	} catch (err) {
		res.status(500).send({ err: err.message });
	}
};

const update = async (req, res) => {
	try {
		const produto = req.body;
		await Produto.update(produto, { where: { id: req.params.id } });
		res.redirect('/'); 
	} catch (err) {
		res.status(500).send({ err: err.message });
	}
};

module.exports = {
	getAll,
	rota_cad,
	rota_det,
	create,
	getById,
	update,
};
