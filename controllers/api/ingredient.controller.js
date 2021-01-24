const { QueryTypes, Op } = require('sequelize');
const IngredientSchema = require('../../database/schemas/ingredient.schema');
const IngredientModel = require('../../database/models/ingredient.model');
exports.findAll = function (req, res) {
	IngredientModel
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
	IngredientModel
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
exports.create = function (req, res) {
	const { error, value } = IngredientSchema.validate(req.body);
	if (error === undefined) {
		IngredientModel
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
	const { error, value } = IngredientSchema.validate(req.body);
	if (error === undefined) {
		IngredientModel
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
	IngredientModel
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
const conn = require('../../database/connection');

exports.findByRecipe = function (req, res) {

	const id = isNaN(Number(req.params.id)) ? 0 : Number(req.params.id);
	conn
		.query(`SELECT * FROM vw_ingredients vwi WHERE vwi.id_recipe = ${id}`,
			{ type: QueryTypes.SELECT })
		.then(result => {
			res.status(200).json(result);
		})
		.catch(e => {
			res.status(500).json(e.original.sqlMessage || e.original || e);
		});
};
exports.findByItem = function (req, res) {

	const id = isNaN(Number(req.params.id)) ? 0 : Number(req.params.id);
	conn
		.query(`SELECT count(*) total_found, rec.id as id_recipe, rec.title as recipe_name
		FROM   tb_ingredients ing
		RIGHT JOIN tb_recipes rec ON ((rec.id = ing.id_recipe))
		WHERE  ing.id_item IN ( ${req.body.items} )
		GROUP BY rec.id, rec.title`,
			{ type: QueryTypes.SELECT })
		.then(recipes => {			
			if (recipes.length > 0) {				
				let recipe_ids = [];
				for (var i = 0; i < recipes.length; i++) 
				{					
					recipe_ids.push(recipes[i].id_recipe);
				}				
				conn
					.query(`SELECT count(*) total_items, rec.title as recipe_name  FROM craftfood.tb_ingredients ing
					RIGHT JOIN tb_recipes rec ON ((rec.id = ing.id_recipe))
					WHERE ing.id_recipe IN (${recipe_ids})
					GROUP BY ing.id_recipe`,
					{ type: QueryTypes.SELECT })
					.then(ingredients => {
						res.status(200).json({
							ingredients,
							recipes
						});	
					})
					.catch(e => {
						res.status(500).json(e.original.sqlMessage || e.original || e);
					});
			} else {				
				res.status(200).json([]);	
			}

		})
		.catch(e => {			
			res.status(500).json(e.original.sqlMessage || e.original || e);
		});
	
};


/*custom*/