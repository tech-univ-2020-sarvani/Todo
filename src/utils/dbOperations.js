// const sequelize = require('./connection');

const get = async (query, sequelizeNote) =>{	

	const data = await sequelizeNote.query(query, { type: sequelizeNote.QueryTypes.SELECT });
	console.log(data);
	return data;
};

const insert = async (query, sequelizeNote) =>{	
	return await sequelizeNote.query(query, { type: sequelizeNote.QueryTypes.INSERT });
};

const deleteQuery = async(query, sequelizeNote) => {
	return await sequelizeNote.query(query, { type: sequelizeNote.QueryTypes.DELETE });
};

const updateQuery = async(query, sequelizeNote) => {
	return await sequelizeNote.query(query, { type: sequelizeNote.QueryTypes.UPDATE });
};

module.exports = {insert, get, deleteQuery, updateQuery};