/** @format */

const Produto = require('../models/produto');

const getAll = async (req, res) => {
	try {
		const estoque = await Produto.findAll();
		res.render('index', {estoque});
	} catch (err) {
		res.status(500).send({ err: err.message });
	}
};

const create = (req, res) => {
	try {
		res.render('cadastro');
	} catch (err) {
		res.status(500).send({ err: err.message });
	}
};

module.exports = {
	getAll,
	create,
};
