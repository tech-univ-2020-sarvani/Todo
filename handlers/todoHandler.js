const uuid = require('uuid');
const fileUtils = require('../utils/fileOperations.js');

const getHandler= async (request,h) => {
	const notes = await fileUtils.readJson('./notes.json');
	return h.response(JSON.stringify(notes));
};

const postHandler = async (request, h)=> {
	const jsonObj2 = request.payload;
	jsonObj2.id = uuid();
	jsonObj2.active = true;
	let arrayNotes = fileUtils.readJson('./notes.json');
	arrayNotes.notes.push(jsonObj2);
	await fileUtils.writeToJson('./notes.json', arrayNotes);
	return h.response('Data saved');
};

const deleteHandler = async(request, h)=> {

};

module.exports = {getHandler, postHandler};