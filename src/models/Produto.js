/** @format */

const Sequelize = require('sequelize');
const connection = require('../database/db.js');

const Produto = connection.define('produto', 
{
	id: {
		type: Sequelize.INTEGER,
		autoIncrement: true,
		allowNull: false,
		primaryKey: true,
	},
	nome: {
		type: Sequelize.STRING,
		allowNull: false,
	},
	nota: {
		type: Sequelize.NUMBER,
		allowNull: false,
	},
	descricao: {
		type: Sequelize.STRING,
		allowNull: false,
	},
	uso: {
		type: Sequelize.INTEGER,
		allowNull: false,
	},
	material: {
		type: Sequelize.STRING,
		allowNull: false,
	},
	imagem1: {
		type: Sequelize.STRING,
		allowNull: false,
	},
	imagem2: {
		type: Sequelize.STRING,
		allowNull: false,
	},
	imagem3: {
		type: Sequelize.STRING,
		allowNull: false,
	},
},
{
	freezeTableName: true,
	timestamps: false,
	createdAt: false,
	updatedAt: false,
});

const initTable = async () => {
	await Produto.sync();
};

initTable();

module.exports = Produto;
