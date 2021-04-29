import status from 'http-status';
import { AppError } from './App.error';

export class ValidationError extends AppError {
  constructor(message: string) {
    super(message, status.UNPROCESSABLE_ENTITY);
  }
}
