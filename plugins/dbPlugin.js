const Sequelize = require('sequelize');

module.exports = {
	name: 'dbPlugin',
	register: async function (server, options) {
		const sequelizeNote = new Sequelize('postgres://sarvanideekshitula:@localhost:5432/todo');
		console.log('Connection to postgres established');
		server.decorate('server', 'sequelize', sequelizeNote);
	},
};