const {getHandler, postHandler, deleteHandler, putHandler,quotesHandler} = require('../handlers/todoHandler.js');
const {postSchema, deleteSchema, putSchema} = require('../schemas/todoSchema.js');

const routesArray = [
	{path: '/notes', method:'POST', config : {handler: postHandler, validate:{payload: postSchema}}}, 
	{path: '/notes', method:'GET', handler: getHandler},
	{path: '/notes/{id}', method:'DELETE', config : {handler: deleteHandler, validate:{params: deleteSchema}}},
	{path: '/notes/{id}', method:'PUT', config : {handler: putHandler, validate:{params: putSchema}}},
	{path: '/quotes', method:'GET', handler: quotesHandler}
];

module.exports = routesArray;