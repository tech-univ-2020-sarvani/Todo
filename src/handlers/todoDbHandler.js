const uuid = require('uuid');
const dbUtils = require('../utils/dbOperations.js');

const getNotes = async (request,h) => {
	try{
		const notes = dbUtils.getNotes();
		return h.response(`All notes: ${JSON.stringify(notes)}`).code(200);
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
		dbUtils.insertNote(jsonObj2);
		return h.response('Data saved').code(200);
	}
	catch(e){
		return h.response(e.message).code(500);
	}
};


const deleteNote = async(request, h)=> {
	const parameters = request.params;
	const result = await dbUtils.deleteQuery(`DELETE from notes where id = '${parameters.id}'`, request.server.sequelize);
	console.log(result);
	if(result[1] === 0){
		h.response(`${parameters.id} is invalid`);
	}
	return h.response('deleted successfully');
};

const putNotes = async(request, h) => {
	const parameters = request.params;
	await dbUtils.updateQuery(`UPDATE notes set isactive = false where id = '${parameters.id}'`, request.server.sequelize);
	return h.response('updated successfully');
};

module.exports = {getNotes, postNotes,deleteNote, putNotes};