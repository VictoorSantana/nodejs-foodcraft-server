module.exports = function (app) {
let { verify } = require('../routes/middleware/authentication');	var controller = require('../controllers/api/ingredient.controller');
	app.get('/api/ingredient/', verify('roll ingredient'), controller.findAll);
	app.get('/api/ingredient/:id', verify('one ingredient'), controller.findOne);
	app.post('/api/ingredient/', verify('add ingredient'), controller.create);
	app.put('/api/ingredient/:id', verify('update ingredient'), controller.update);
	app.delete('/api/ingredient/:id', verify('delete ingredient'), controller.delete);


/*custom*/

	app.get('/api/ingredient/roll/:id', controller.findByRecipe);
	app.get('/api/ingredient/findby/item/', controller.findByItem);

	/*custom*/
}