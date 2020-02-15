'use strict';

module.exports = {

	up: (queryInterface, Sequelize) => queryInterface.changeColumn(
		'notes',
		'description',
		{
			type: Sequelize.TEXT,
		},
	),
};

  