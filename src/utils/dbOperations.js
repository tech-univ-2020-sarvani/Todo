// const sequelize = require('./connection');
const db = require('../../models/index');

const getNotes = async () =>{	
	const notes = await db.notes.findAll();
	return notes;
};

const insertNote = async (jsonObj2) =>{	
	return await db.notes.create({ title: jsonObj2.title, description: jsonObj2.description, id:jsonObj2.id, isactive:jsonObj2.isactive });
};

const deleteQuery = async(query, sequelizeNote) => {
	return await sequelizeNote.query(query, { type: sequelizeNote.QueryTypes.DELETE });
};

const updateQuery = async(query, sequelizeNote) => {
	return await sequelizeNote.query(query, { type: sequelizeNote.QueryTypes.UPDATE });
};

module.exports = {insertNote, getNotes, deleteQuery, updateQuery};