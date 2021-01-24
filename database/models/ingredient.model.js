const Sequelize = require('sequelize'); 
const db = require('../connection'); 
const model = db.define('tb_ingredients', { 
	 id: {
		 type: Sequelize.INTEGER,
		 autoIncrement: true,
		 primaryKey: true 	
}, 
	 id_recipe: { 
		 type: Sequelize.INTEGER(4), 
	 allowNull: false 
	}, 
	 id_item: { 
		 type: Sequelize.INTEGER(4), 
	 allowNull: false 
	}, 
	 id_unit: { 
		 type: Sequelize.INTEGER(4), 
	 allowNull: false 
	}, 
	 amount: { 
		 type: Sequelize.INTEGER(2), 
	 allowNull: false 
	}, 
}, { timestamps: false }); 
module.exports = model; 
