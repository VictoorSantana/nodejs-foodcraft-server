const Sequelize = require('sequelize'); 
const db = require('../connection'); 
const model = db.define('tb_users', { 
	 id: {
		 type: Sequelize.INTEGER,
		 autoIncrement: true,
		 primaryKey: true 	
}, 
	 email: { 
		 type: Sequelize.STRING(30), 
	 allowNull: false 
	}, 
	 name: { 
		 type: Sequelize.STRING(40), 
	 allowNull: false 
	}, 
	 password: { 
		 type: Sequelize.STRING(20), 
	 allowNull: false 
	}, 
}, { timestamps: false }); 
module.exports = model; 
