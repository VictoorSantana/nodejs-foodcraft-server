module.exports = function (app) {
	var controller = require('../controllers/api/ingredient.controller');
	app.get('/api/ingredient/', controller.findAll);
	app.get('/api/ingredient/:id', controller.findOne);
	app.post('/api/ingredient/', controller.create);
	app.put('/api/ingredient/:id', controller.update);
	app.delete('/api/ingredient/:id', controller.delete);


/*custom*/

	app.get('/api/ingredient/roll/:id', controller.findByRecipe);
	app.get('/api/ingredient/findby/item/', controller.findByItem);

	/*custom*/
}