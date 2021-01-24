const { QueryTypes, Op } = require('sequelize');
const UserSchema = require('../../database/schemas/user.schema');
const UserModel = require('../../database/models/user.model');
exports.findAll = function (req, res) {
	UserModel
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
	UserModel
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
exports.findByEmail = function (req, res) {
	const email = req.params.email;
	UserModel
		.findAll({
			where: { email: { [Op.like]: '%' + email + '%' } }
		},)
		.then(result => {
			res.status(200).json(result);
		})
		.catch(e => {
			res.status(500).json(e.original.sqlMessage || e.original || e);
		});
};
exports.findByName = function (req, res) {
	const name = req.params.name;
	UserModel
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
	const { error, value } = UserSchema.validate(req.body);
	if (error === undefined) {
		UserModel
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
	const { error, value } = UserSchema.validate(req.body);
	if (error === undefined) {
		UserModel
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
	UserModel
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


/*custom*/
const jwt = require('jsonwebtoken');

exports.login = function (req, res) {
	const email = req.body.email ? req.body.email : '-1';
	const password = req.body.password ? req.body.password : '-1';

	UserModel
		.findAll({
			attributes: ['id', 'email', 'name'],
			where: { email, password }
		})
		.then(result => {
			if (result.length > 0) {

				const token = jwt.sign({ _id: result[0].id }, process.env.SERVER_KEY, { expiresIn: process.env.SERVER_EXPIRES });
				
				res.status(200).json({
					token,
					email: result[0].email,
					name: result[0].name
				});

			} else {
				res.status(401).json('Sorry, wrong password!');
			}

		})
		.catch(e => {
			console.log(e);
			res.status(500).json(e.original.sqlMessage || e.original || e);
		});
};

exports.me = function (req, res) {	
	UserModel
		.findAll({
			attributes: ['email', 'name'],
			where: { id: isNaN(Number(req.decoded)) ? '-1' : Number(req.decoded) }
		})
		.then(result => {		
			if (result.length > 0) {								
				res.status(200).send({					
					email: result[0].email,
					name: result[0].name
				});
			} else {				
				res.status(500).send('User no longer exists...');
			}

		})
		.catch(e => {
			console.log(e);
			//res.status(500).json(e.original.sqlMessage || e.original || e);
		});
};
/*custom*/