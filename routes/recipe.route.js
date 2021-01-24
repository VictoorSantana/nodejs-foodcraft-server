module.exports = function (app) {
let { verify } = require('../routes/middleware/authentication');	var controller = require('../controllers/api/recipe.controller');
	app.get('/api/recipe/', verify('roll recipe'), controller.findAll);
	app.get('/api/recipe/:id', verify('one recipe'), controller.findOne);
	app.get('/api/recipe/findby/title/:title', verify('find by recipe title'), controller.findByTitle);
	app.post('/api/recipe/', verify('add recipe'), controller.create);
	app.put('/api/recipe/:id', verify('update recipe'), controller.update);
	app.delete('/api/recipe/:id', verify('delete recipe'), controller.delete);


/*custom*//*custom*/
}