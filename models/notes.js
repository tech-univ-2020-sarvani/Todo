'use strict';
module.exports = (sequelize, DataTypes) => {
	const notes = sequelize.define('notes', {
		title: DataTypes.STRING,
		description: DataTypes.STRING,
		id: {type: DataTypes.UUID,
			primaryKey:true
		},
		isactive: DataTypes.BOOLEAN
	}, {});
	notes.associate = function(models) {
		// associations can be defined here
	};
	return notes;
};