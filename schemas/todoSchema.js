const Joi = require('@hapi/joi');

const postSchema = Joi.object({
	title:Joi.string().required(),
	description: Joi.string().required()
});

const deleteSchema = Joi.object({
	id:Joi.string().required()
});

module.exports = {postSchema, deleteSchema};