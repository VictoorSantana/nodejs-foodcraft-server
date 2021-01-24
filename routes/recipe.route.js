module.exports = function (app) {
	var controller = require('../controllers/api/recipe.controller');
	app.get('/api/recipe/', controller.findAll);
	app.get('/api/recipe/:id', controller.findOne);
	app.get('/api/recipe/findby/title/:title', controller.findByTitle);
	app.post('/api/recipe/', controller.create);
	app.put('/api/recipe/:id', controller.update);
	app.delete('/api/recipe/:id', controller.delete);


/*custom*//*custom*/
}