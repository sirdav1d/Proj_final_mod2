/** @format */

const Produto = require('../models/produto.js');

const getAll = async (req, res) => {
	try {
		const estoque = await Produto.findAll();
		res.render('index', { estoque });
	} catch (err) {
		res.status(500).send({ err: err.message });
	}
};

const create = (req, res) => {
	res.render('cadastro');
};

const show = (req, res) => {
	res.render('detalhes');
};

module.exports = {
	getAll,
	create,
	show,
};
