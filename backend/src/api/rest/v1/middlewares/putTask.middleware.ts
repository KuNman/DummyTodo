import { RequestHandler } from 'express';
import { PutTaskSchema } from '../validation/PutTaskSchema';
import { ValidationError } from '../../../../errors/Validation.error';

export const putTaskMiddleware: RequestHandler = (req, res, next) => {
  const validation = PutTaskSchema.validate(req.body);

  if (validation.error) {
    throw new ValidationError(validation.error.message);
  }

  next();
};
