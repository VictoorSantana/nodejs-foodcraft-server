const Sequelize = require('sequelize'); 
const db = require('../connection'); 
const model = db.define('tb_units', { 
	 id: {
		 type: Sequelize.INTEGER,
		 autoIncrement: true,
		 primaryKey: true 	
}, 
	 name: { 
		 type: Sequelize.STRING(45), 
	 allowNull: false 
	}, 
}, { timestamps: false }); 
module.exports = model; 
