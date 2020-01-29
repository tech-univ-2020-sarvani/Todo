const axios = require('axios').default;

const quotesHandler = async(request, h) => {
	try{
		const quotesData = await axios.get('http://api.quotable.io/random');
		if(!quotesData.data || quotesData.data === {}){
			return h.response('No content').code(204);
		}
		const quotes = quotesData.data;
		return h.response(`${quotes.content} by ${quotes.author}`).code(200);
	}
	catch(e){
		return h.response(e.message).code(500);
	}
};

module.exports = quotesHandler;