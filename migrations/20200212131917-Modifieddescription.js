'use strict';
module.exports = {

	up: (queryInterface, Sequelize) => queryInterface.changeColumn(
		'notes',
		'description',
		{
			type: 'JSONB USING CAST ("description" as JSONB)',
		},
	),
};
