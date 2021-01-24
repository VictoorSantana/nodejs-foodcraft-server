const Joi = require('@hapi/joi'); 
module.exports = Joi.object({ 
  title: Joi.string().max(45).required(),
  description: Joi.string().max(400),
}); 
