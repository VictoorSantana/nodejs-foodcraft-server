module.exports = function (app) {
let { verify } = require('../routes/middleware/authentication');	var controller = require('../controllers/api/unit.controller');
	app.get('/api/unit/', verify('roll unit'), controller.findAll);
	app.get('/api/unit/:id', verify('one unit'), controller.findOne);
	app.get('/api/unit/findby/name/:name', verify('find by unit name'), controller.findByName);
	app.post('/api/unit/', verify('add unit'), controller.create);
	app.put('/api/unit/:id', verify('update unit'), controller.update);
	app.delete('/api/unit/:id', verify('delete unit'), controller.delete);


/*custom*//*custom*/
}