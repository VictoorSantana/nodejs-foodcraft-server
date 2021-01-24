const { QueryTypes, Op } = require('sequelize');
const RecipeSchema = require('../../database/schemas/recipe.schema');
const RecipeModel = require('../../database/models/recipe.model');
exports.findAll = function (req, res) {
	RecipeModel
		.findAll()
		.then(result => {
			res.status(200).json(result);
		})
		.catch(e => {
			res.status(500).json(e.original.sqlMessage || e.original || e);
		});
};
exports.findOne = function (req, res) {
	const id = isNaN(Number(req.params.id)) ? 0 : Number(req.params.id);
	RecipeModel
		.findAll({
			where: { id }
		})
	.then(result => {
			res.status(200).json(result);
		})
		.catch(e => {
			res.status(500).json(e.original.sqlMessage || e.original || e);
		});
};
exports.findByTitle = function (req, res) {
	const title = req.params.title;
	RecipeModel
		.findAll({
			where: { title: { [Op.like]: '%' + title + '%' } }
		},)
		.then(result => {
			res.status(200).json(result);
		})
		.catch(e => {
			res.status(500).json(e.original.sqlMessage || e.original || e);
		});
};
exports.create = function (req, res) {
	const { error, value } = RecipeSchema.validate(req.body);
	if (error === undefined) {
		RecipeModel
			.create(value)
			.then(result => {
			res.status(200).json(result);
			})
			.catch(e => {
				res.status(500).json(e);
		});
	} else {
		res.status(500).json(error);
	}
};
exports.update = function (req, res) {
	const id = isNaN(Number(req.params.id)) ? 0 : Number(req.params.id);
	const { error, value } = RecipeSchema.validate(req.body);
	if (error === undefined) {
		RecipeModel
		.update(value, {
			where: { id }
		})
		.then(result => {
			res.status(200).json(result);
		})
		.catch(e => {
			res.status(500).json(e.original.sqlMessage || e.original || e);
		});
	} else {
		res.status(500).json(error);
	}
};
exports.delete = function (req, res) {
	const id = isNaN(Number(req.params.id)) ? 0 : Number(req.params.id);
	RecipeModel
		.destroy({
			where: { id }
		})
		.then(result => {
			res.status(200).json(result);
		})
		.catch(e => {
			res.status(500).json(e.original.sqlMessage || e.original || e);
		});
};


/*custom*//*custom*/