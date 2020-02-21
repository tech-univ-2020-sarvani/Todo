const Sequelize = require('sequelize');
const sequelize = new Sequelize('postgres://sarvanideekshitula:@localhost:5432/todo');

module.exports = sequelize;