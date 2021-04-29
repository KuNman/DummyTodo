import Joi from 'joi';

export const PutTaskSchema = Joi.object({
  value: Joi.string()
    .required(),
  isDone: Joi.boolean(),
});
