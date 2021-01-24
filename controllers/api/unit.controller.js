const { QueryTypes, Op } = require('sequelize');
const UnitSchema = require('../../database/schemas/unit.schema');
const UnitModel = require('../../database/models/unit.model');
exports.findAll = function (req, res) {
	UnitModel
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
	UnitModel
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
exports.findByName = function (req, res) {
	const name = req.params.name;
	UnitModel
		.findAll({
			where: { name: { [Op.like]: '%' + name + '%' } }
		},)
		.then(result => {
			res.status(200).json(result);
		})
		.catch(e => {
			res.status(500).json(e.original.sqlMessage || e.original || e);
		});
};
exports.create = function (req, res) {
	const { error, value } = UnitSchema.validate(req.body);
	if (error === undefined) {
		UnitModel
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
	const { error, value } = UnitSchema.validate(req.body);
	if (error === undefined) {
		UnitModel
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
	UnitModel
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