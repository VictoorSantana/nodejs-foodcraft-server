module.exports = function (app) {
let { verify } = require('../routes/middleware/authentication');	var controller = require('../controllers/api/user.controller');
	app.get('/api/user/', verify('roll user'), controller.findAll);
	app.get('/api/user/:id', verify('one user'), controller.findOne);
	app.get('/api/user/findby/email/:email', verify('find by email'), controller.findByEmail);
	app.get('/api/user/findby/name/:name', verify('find by name'), controller.findByName);
	app.post('/api/user/', verify('add user'), controller.create);
	app.put('/api/user/:id', verify('update user'), controller.update);
	app.delete('/api/user/:id', verify('delete user'), controller.delete);


/*custom*/
	app.post('/api/auth/login/', verify('public'), controller.login);
	app.get('/api/auth/me/', verify('public'), controller.me);
/*custom*/
}