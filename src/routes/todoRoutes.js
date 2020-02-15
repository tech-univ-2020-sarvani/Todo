const {getNotes, postNotes, deleteNote, putNotes} = require('../handlers/todoDbHandler.js');
const quotesHandler = require('../handlers/quotesHandler');
const {postSchema, deleteSchema, putSchema} = require('../schemas/todoSchema.js');

const routesArray = [
	{path: '/notes', method:'POST', config : {handler: postNotes, validate:{payload: postSchema}}}, 
	{path: '/notes', method:'GET', handler: getNotes},
	{path: '/notes/{id}', method:'DELETE', config : {handler: deleteNote, validate:{params: deleteSchema}}},
	{path: '/notes/{id}', method:'PUT', config : {handler: putNotes, validate:{params: putSchema}}},
	{path: '/quotes', method:'GET', handler: quotesHandler}
];

module.exports = routesArray;