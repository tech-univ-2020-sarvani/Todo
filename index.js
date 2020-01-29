const start = require('./server');
const dbPlugin = require('./plugins/dbPlugin');
const server = start();
const registerPlugin = async function () {

	await server.register(dbPlugin);
	server.start();
};

registerPlugin();