const uuid = require('uuid');
const dbUtils = require('../utils/dbOperations.js');

const getNotes = async (request,h) => {
	try{
		const notes = await dbUtils.getNotes();
		return h.response(notes).code(200);
	}
	catch(e){
		return h.response(e.message).code(500);
	}
};

const postNotes = async (request, h)=> {
	try{
		let jsonObj2 = request.payload;
		jsonObj2.id = uuid();
		jsonObj2.isactive = true;
		const note = await dbUtils.insertNote(jsonObj2);
		const noteData = {
			title: note.dataValues.title,
			description: note.dataValues.description,
			id: note.dataValues.id,
			isactive: note.dataValues.isactive
		};
		return h.response(noteData).code(200);
	}
	catch(e){
		return h.response(e.message).code(500);
	}
};


const deleteNote = async(request, h)=> {
	try{
		const id = request.params.id;
		const result = await dbUtils.deleteQuery(id);
		if(result === 0){
			return h.response(`${id} not found`);
		}
		return h.response(`${id} is deleted`).code(200);
	}
	catch(e){
		return h.response(e.message).code(500);
	}
};

const putNotes = async(request, h) => {
	try{
		const id = request.params.id;
		const result = await dbUtils.updateQuery(id);
		if(result[0] === 0){
			return h.response(`${id} not found`);
		}
		return h.response(`${id} is updated`);
	}
	catch(e){
		return h.response(e.message).code(500);
	}
};

module.exports = {getNotes, postNotes,deleteNote, putNotes};