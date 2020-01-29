const uuid = require('uuid');
const dbUtils = require('../utils/dbOperations.js');

const getNotes = async (request,h) => {
	const notes = await dbUtils.get('SELECT * from notes');
	// console.log(notes);
	return h.response(JSON.stringify(notes));
};

const postNotes = async (request, h)=> {
	let jsonObj2 = request.payload;
	jsonObj2.id = uuid();
	jsonObj2.active = 1;
	let query = 'INSERT INTO notes (title, description, id, isactive) VALUES';
	const q = `(${Object.values(jsonObj2).map(x=>`'${x}'`).join(',')})`;
	query+=q;
	// console.log(query);	
	dbUtils.insert(query);
	return h.response('Data saved');
};

const deleteNotes = async(request, h)=> {
	const parameters = request.params;
	const result = await dbUtils.deleteQuery(`DELETE from notes where id = '${parameters.id}'`);
	console.log(result);
	if(result[1] === 0){
		h.response(`${parameters.id} is invalid`);
	}
	return h.response('deleted successfully');
};

const putNotes = async(request, h) => {
	const parameters = request.params;
	await dbUtils.updateQuery(`UPDATE notes set isactive = false where id = '${parameters.id}'`);
	return h.response('updated successfully');
};

module.exports = {getNotes, postNotes, deleteNotes, putNotes};