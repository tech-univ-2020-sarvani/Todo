// const sequelize = require('./connection');
const db = require('../../models/index');

const getNotes = async () =>{	
	const notes = await db.notes.findAll();
	return notes;
};

const insertNote = async (jsonObj2) =>{	
	const note = await db.notes.create({ title: jsonObj2.title, description: jsonObj2.description, id:jsonObj2.id, isactive:jsonObj2.isactive });
	return note;
};

const deleteQuery = async(id) => {
	await db.notes.destroy({
		where :{
			id: id
		}
	});
};

const updateQuery = async(id) => {
	await db.notes.update({isactive:false}, {
		where: {
			id:id
		}
	});
};

module.exports = {insertNote, getNotes, deleteQuery, updateQuery};