const { QueryTypes, Op } = require('sequelize');
const AccessSchema = require('../../database/schemas/access.schema');
const AccessModel = require('../../database/models/access.model');
exports.findAll = function (req, res) {
	AccessModel
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
	AccessModel
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
exports.findById_user = function (req, res) {
	const id_user = isNaN(Number(req.params.id_user)) ? 0 : Number(req.params.id_user);
	AccessModel
		.findAll({
			where: { id_user: { [Op.like]: '%' + id_user + '%' } }
		},)
		.then(result => {
			res.status(200).json(result);
		})
		.catch(e => {
			res.status(500).json(e.original.sqlMessage || e.original || e);
		});
};
exports.findByEndpoint = function (req, res) {
	const endpoint = req.params.endpoint;
	AccessModel
		.findAll({
			where: { endpoint: { [Op.like]: '%' + endpoint + '%' } }
		},)
		.then(result => {
			res.status(200).json(result);
		})
		.catch(e => {
			res.status(500).json(e.original.sqlMessage || e.original || e);
		});
};
exports.create = function (req, res) {
	const { error, value } = AccessSchema.validate(req.body);
	if (error === undefined) {
		AccessModel
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
	const { error, value } = AccessSchema.validate(req.body);
	if (error === undefined) {
		AccessModel
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
	AccessModel
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