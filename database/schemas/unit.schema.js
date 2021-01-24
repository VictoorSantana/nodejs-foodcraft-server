const Joi = require('@hapi/joi'); 
module.exports = Joi.object({ 
  name: Joi.string().max(45).required(),
}); 
