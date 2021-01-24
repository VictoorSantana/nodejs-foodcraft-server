module.exports = function (app) {
	var controller = require('../controllers/api/item.controller');
	app.get('/api/item/', controller.findAll);
	app.get('/api/item/:id', controller.findOne);
	app.get('/api/item/findby/name/:name', controller.findByName);
	app.post('/api/item/', controller.create);
	app.put('/api/item/:id', controller.update);
	app.delete('/api/item/:id', controller.delete);


/*custom*//*custom*/
}