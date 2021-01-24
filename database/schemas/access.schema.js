const Joi = require('@hapi/joi'); 
module.exports = Joi.object({ 
  id_user: Joi.number().integer().max(9999).required(),
  endpoint: Joi.string().max(40).required(),
}); 
