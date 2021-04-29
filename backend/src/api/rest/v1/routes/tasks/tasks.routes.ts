import { Route } from '../routes';
import TasksController from '../../controllers/Tasks.controller';
import { putTaskMiddleware } from '../../middlewares/putTask.middleware';

export const tasksRoutes: Route[] = [
  {
    method: 'put',
    path: '/',
    action: TasksController.create,
    middlewares: [putTaskMiddleware],
  },
  {
    method: 'get',
    path: '/:id',
    action: TasksController.get,
  },
  {
    method: 'get',
    path: '/',
    action: TasksController.list,
  },
  {
    method: 'delete',
    path: '/:id',
    action: TasksController.delete,
  },
  {
    method: 'post',
    path: '/:id',
    action: TasksController.update,
  },
];
