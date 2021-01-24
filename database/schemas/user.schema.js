const Joi = require('@hapi/joi'); 
module.exports = Joi.object({ 
  email: Joi.string().max(30).required(),
  name: Joi.string().max(40).required(),
  password: Joi.string().max(20).required(),
}); 
