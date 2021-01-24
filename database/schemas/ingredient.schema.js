const Joi = require('@hapi/joi'); 
module.exports = Joi.object({ 
  id_recipe: Joi.number().integer().max(9999).required(),
  id_item: Joi.number().integer().max(9999).required(),
  id_unit: Joi.number().integer().max(9999).required(),
  amount: Joi.number().integer().max(99).required(),
}); 
