const Hapi = require('@hapi/hapi');
const routes = require('./routes/todoRoutes.js');
const Joi = require('@hapi/joi');
const server = Hapi.Server({
	host: 'localhost',
	port: 8080
});
server.route(routes);
	
const start = async () => {
	
	await server.validator(Joi);
	await server.start();
	console.log(`Server running at: ${server.info.uri}`);
	return server;
};
// start();
module.exports = server;