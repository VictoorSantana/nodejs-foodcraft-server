const Sequelize = require('sequelize'); 
const db = require('../connection'); 
const model = db.define('tb_recipes', { 
	 id: {
		 type: Sequelize.INTEGER,
		 autoIncrement: true,
		 primaryKey: true 	
}, 
	 title: { 
		 type: Sequelize.STRING(45), 
	 allowNull: false 
	}, 
	 description: { 
		 type: Sequelize.STRING(400), 
	}, 
}, { timestamps: false }); 
module.exports = model; 
