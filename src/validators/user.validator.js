import Joi from '@hapi/joi';
import HttpStatus from 'http-status-codes';

export const newUserValidator = (req, res, next) => {
  let regex =  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]{8,15}$/;
  const schema = Joi.object({
    fullName: Joi.string().min(4).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(8).required().pattern(regex),
    mobileNumber: Joi.number().min(10).required() 
  });                                                          
  const { error, value } = schema.validate(req.body);
  if (error) {
    res.status(HttpStatus.BAD_REQUEST).json({
      code: HttpStatus.BAD_REQUEST,
      message: `${error}`
    });
  } else {
    req.validatedBody = value;
    next();
  }
};

export const siginValidator = (req, res, next) => {
  let regex =  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]{8,15}$/;
  const schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(8).required().pattern(regex)
  });                                                          
  const { error, value } = schema.validate(req.body);
  if (error) {
    res.status(HttpStatus.BAD_REQUEST).json({
      code: HttpStatus.BAD_REQUEST,
      message: `${error}`
    });
  } else {
    req.validatedBody = value;
    next();
  }
};