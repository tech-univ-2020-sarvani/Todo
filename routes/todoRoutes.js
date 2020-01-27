const {getHandler, postHandler, deleteHandler} = require('../handlers/todoHandler.js');
const Joi = require('@hapi/joi');
const schema = Joi.object({
	id: Joi.integer().required()
});

const routesArray = [
	{path: '/notes', method:'POST', handler: postHandler}, 
	{path: '/notes', method:'GET', handler: getHandler},
	{path: '/notes/', method:'DELETE', handler: deleteHandler}
];

module.exports = routesArray;