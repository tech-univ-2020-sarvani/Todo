const {getHandler, postHandler, deleteHandler} = require('../handlers/todoHandler.js');
const {postSchema, deleteSchema} = require('../schemas/todoSchema.js');

const routesArray = [
	{path: '/notes', method:'POST', config : {handler: postHandler, validate:{payload: postSchema}}}, 
	{path: '/notes', method:'GET', handler: getHandler},
	{path: '/notes/{id}', method:'DELETE', config : {handler: deleteHandler, validate:{params: deleteSchema}}}
];

module.exports = routesArray;