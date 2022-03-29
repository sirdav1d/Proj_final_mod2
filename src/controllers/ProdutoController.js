/** @format */

const Produto = require('../models/Produto');

const getAll = async (req, res) => {
	try {
		const estoque = await Produto.findAll();
		res.render('index', { estoque });
	} catch (err) {
		res.status(500).send({ err: err.message });
	}
};

module.exports = {
	getAll,
};
