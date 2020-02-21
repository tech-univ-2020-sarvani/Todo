const Hapi = require('@hapi/hapi');
const routes = require('./src/routes/todoRoutes.js');
const Joi = require('@hapi/joi');

const start = () => {
	const server = Hapi.Server({
		host: '0.0.0.0',
		port: 8080,
		routes:{
			cors:true
		},
	});
	server.route(routes);
	server.validator(Joi);
	console.log(`Server running at: ${server.info.uri}`);
	return server;
};

module.exports = start;