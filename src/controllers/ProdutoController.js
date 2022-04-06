const Produto = require("../models/Produto.js");

let message = '';
let type = '';

const getAll = async (req, res) => {
	try {
		const estoque = await Produto.findAll();
		res.render('index', {
			estoque,
			produtoPut: null,
			produtoDel: null,
			message,
			type,
		});
	} catch (err) {
		res.status(500).send({ err: err.message });
	}
};

const rota_cad = (req, res) => {
	try {
		res.render('cadastro', {message, type});
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
			message = 'Preencha todos os campos para adicionar um sneaker';
			type = 'danger';
			return res.redirect('/cadastro');
		}
		await Produto.create(produto);
		message = 'Sneaker Adicionado com sucesso';
		type = 'success';
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
				produtoDel: null,
				message,
				type,
			});
		} else {
			res.render('index', {
				estoque,
				produtoPut: null,
				produtoDel: produto,
				message,
				type,
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
		message = 'Sneaker Atualizado com sucesso';
		type = 'success';
		res.redirect('/');
	} catch (err) {
		res.status(500).send({ err: err.message });
	}
};

const remove = async (req, res) => {
	try {
		await Produto.destroy({ where: { id: req.params.id } });
		message = 'Sneaker Apagado com sucesso';
		type = 'success';
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
	remove,
};
