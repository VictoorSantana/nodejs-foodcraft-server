module.exports = function (app) {
let { verify } = require('../routes/middleware/authentication');	var controller = require('../controllers/api/access.controller');
	app.get('/api/access/', verify('roll access'), controller.findAll);
	app.get('/api/access/:id', verify('one access'), controller.findOne);
	app.get('/api/access/findby/id_user/:id_user', verify('find by id_user'), controller.findById_user);
	app.get('/api/access/findby/endpoint/:endpoint', verify('find by endpoint'), controller.findByEndpoint);
	app.post('/api/access/', verify('add access'), controller.create);
	app.put('/api/access/:id', verify('update access'), controller.update);
	app.delete('/api/access/:id', verify('delete access'), controller.delete);


/*custom*//*custom*/
}