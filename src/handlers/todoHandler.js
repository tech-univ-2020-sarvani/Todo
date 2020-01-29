const uuid = require('uuid');
const fileUtils = require('../utils/fileOperations.js');


const getHandler= async (request,h) => {
	const notes = await fileUtils.readJson('./resources/notes.json');
	return h.response(JSON.stringify(notes));
};

const postHandler = async (request, h)=> {
	let jsonObj2 = request.payload;
	jsonObj2.id = uuid();
	jsonObj2.active = true;
	let arrayNotes = await fileUtils.readJson('./resources/notes.json');
	arrayNotes.notes.push(jsonObj2);
	fileUtils.writeToJson('./resources/notes.json', arrayNotes);
	return h.response('Data saved');
};

const deleteHandler = async(request, h)=> {
	const parameters = request.params;
	let arrayNotes = await fileUtils.readJson('./resources/notes.json');
	const matchednotes = arrayNotes.notes.map((note) => note.id).filter((noteId) => noteId === parameters.id);
	// console.log(matchednotes.length);
	if(matchednotes.length === 0){
		return h.response('Note does not exists');
	}
	for(let i=0;i<arrayNotes.notes.length;i++){
		if(arrayNotes.notes[i].id === parameters.id){
			arrayNotes.notes.splice(i,1);
		}
	}
	await fileUtils.writeToJson('./resources/notes.json', arrayNotes);
	return h.response('deleted successfully');
};

const putHandler = async(request, h) => {
	const parameters = request.params;
	let arrayNotes = await fileUtils.readJson('./resources/notes.json');
	const matchednotes = arrayNotes.notes.map((note) => note.id).filter((noteId) => noteId === parameters.id);
	// console.log(matchednotes.length);
	if(matchednotes.length === 0){
		return h.response('Note does not exists');
	}
	for(let i=0;i<arrayNotes.notes.length;i++){
		if(arrayNotes.notes[i].id === parameters.id){
			arrayNotes.notes[i].active = false;
		}
	}
	await fileUtils.writeToJson('./resources/notes.json', arrayNotes);
	return h.response('updated successfully');
};


module.exports = {getHandler, postHandler, deleteHandler, putHandler};