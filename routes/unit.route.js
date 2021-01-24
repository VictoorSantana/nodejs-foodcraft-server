module.exports = function (app) {
	var controller = require('../controllers/api/unit.controller');
	app.get('/api/unit/', controller.findAll);
	app.get('/api/unit/:id', controller.findOne);
	app.get('/api/unit/findby/name/:name', controller.findByName);
	app.post('/api/unit/', controller.create);
	app.put('/api/unit/:id', controller.update);
	app.delete('/api/unit/:id', controller.delete);


/*custom*//*custom*/
}