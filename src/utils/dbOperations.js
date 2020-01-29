const sequelize = require('./connection');

const get = async (query) =>{	

	const data = await sequelize.query(query, { type: sequelize.QueryTypes.SELECT });
	console.log(data);
	return data;
};

const insert = async (query) =>{	
	return await sequelize.query(query, { type: sequelize.QueryTypes.INSERT });
};

const deleteQuery = async(query) => {
	return await sequelize.query(query, { type: sequelize.QueryTypes.DELETE });
};

const updateQuery = async(query) => {
	return await sequelize.query(query, { type: sequelize.QueryTypes.UPDATE });
};

module.exports = {insert, get, deleteQuery, updateQuery};