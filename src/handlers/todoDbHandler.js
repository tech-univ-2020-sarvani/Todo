const uuid = require('uuid');
const dbUtils = require('../utils/dbOperations.js');

const getNotes = async (request,h) => {
	const notes = dbUtils.get();
	return h.response(`All notes: ${JSON.stringify(notes)}`);
};

const postNotes = async (request, h)=> {
	let jsonObj2 = request.payload;
	jsonObj2.id = uuid();
	jsonObj2.isactive = true;
	dbUtils.insert(jsonObj2);
	return h.response('Data saved');
};

// const deleteNotes = async(request, h)=> {
// 	const parameters = request.params;
// 	const result = await dbUtils.deleteQuery(`DELETE from notes where id = '${parameters.id}'`, request.server.sequelize);
// 	console.log(result);
// 	if(result[1] === 0){
// 		h.response(`${parameters.id} is invalid`);
// 	}
// 	return h.response('deleted successfully');
// };

// const putNotes = async(request, h) => {
// 	const parameters = request.params;
// 	await dbUtils.updateQuery(`UPDATE notes set isactive = false where id = '${parameters.id}'`, request.server.sequelize);
// 	return h.response('updated successfully');
// };

module.exports = {getNotes, postNotes,};