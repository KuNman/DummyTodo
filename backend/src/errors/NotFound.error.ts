import status from 'http-status';
import { AppError } from './App.error';

export class NotFoundError extends AppError {
  constructor(modelName: string, id: number) {
    super(`${modelName} ${id}`, status.NOT_FOUND);
  }
}
