module.exports = function (app) {
let { verify } = require('../routes/middleware/authentication');	var controller = require('../controllers/api/item.controller');
	app.get('/api/item/', verify('roll item'), controller.findAll);
	app.get('/api/item/:id', verify('one item'), controller.findOne);
	app.get('/api/item/findby/name/:name', verify('find by item name'), controller.findByName);
	app.post('/api/item/', verify('add item'), controller.create);
	app.put('/api/item/:id', verify('update item'), controller.update);
	app.delete('/api/item/:id', verify('delete item'), controller.delete);


/*custom*//*custom*/
}