const Joi = require('@hapi/joi');

const postSchema = Joi.object({
	title:Joi.string().required(),
	description: Joi.string().required()
});

const deleteSchema = Joi.object({
	id:Joi.string().required()
});

const putSchema = Joi.object({
	id: Joi.string().guid().required()
});

module.exports = {postSchema, deleteSchema, putSchema};