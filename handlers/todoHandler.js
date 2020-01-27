const uuid = require('uuid');
const fileUtils = require('../utils/fileOperations.js');

const getHandler= async (request,h) => {
	const notes = await fileUtils.readJson('./notes.json');
	return h.response(JSON.stringify(notes));
};

const postHandler = async (request, h)=> {
	let jsonObj2 = request.payload;
	jsonObj2.id = uuid();
	jsonObj2.active = true;
	let arrayNotes = await fileUtils.readJson('./notes.json');
	console.log(arrayNotes);
	arrayNotes.notes.push(jsonObj2);
	fileUtils.writeToJson('./notes.json', arrayNotes);
	return h.response('Data saved');
};

const deleteHandler = async(request, h)=> {
	const parameters = request.params;
	let arrayNotes = await fileUtils.readJson('./notes.json');
	for(let i=0;i<arrayNotes.notes.length;i++){
		if(arrayNotes.notes[i].id === parameters.id){
			arrayNotes.notes.splice(i,1);
		}
	}
	await fileUtils.writeToJson('./notes.json', arrayNotes);
	return h.response('deleted successfully');
};
module.exports = {getHandler, postHandler, deleteHandler};