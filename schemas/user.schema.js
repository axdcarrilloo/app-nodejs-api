
const Joi = require('joi');

const id = Joi.string().uuid();
const numberCC = Joi.string().min(10);
const name = Joi.string().min(5).max(20);
const lastName = Joi.string().min(5).max(20);
// const age = Joi.number().integer().min(18);
const email = Joi.string().email();
const userName = Joi.string().min(5).max(20);
const password = Joi.string().min(5).max(20);

const registerUserSchema = Joi.object({
  numberCC: numberCC.required(),
  name: name.required(),
  lastName: lastName.required(),
  email: email.required(),
  userName: userName.required(),
  password: password.required()
});

module.exports = registerUserSchema;
