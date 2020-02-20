
const pongHandler = (request,h) => {
	console.log('PONG!');
	return h.response('PONG!').code(200);
};

module.exports = {pongHandler};