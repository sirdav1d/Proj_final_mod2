

const Sequelize = require('sequelize');

const connection = new Sequelize(
	process.env.DATABASE,
	process.env.DB_USER,
	process.env.DB_PASS,
	{
		host: process.env.DB_HOST,
		port: 5432,
		dialect: 'postgres',
		ssl: true,
  		protocol: "postgres",
  		logging: true,
		dialectOptions: {
			ssl: {
				require: true,
				rejectUnauthorized: false,
			},
		},
	},
);

module.exports = connection;
