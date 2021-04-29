import { Router } from 'express';
import tasksRouter from './routes/tasks/tasks.router';
import { config } from '../../../config/config';

const restRouter = Router();

restRouter.use(config.routes.tasks, tasksRouter);

export default restRouter;
