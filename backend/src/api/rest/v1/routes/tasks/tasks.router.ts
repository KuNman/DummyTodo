import { Router } from 'express';
import { tasksRoutes } from './tasks.routes';
import { Route } from '../routes';

const tasksRouter = Router();

tasksRoutes
  .forEach(
    (route: Route) => tasksRouter[route.method](
      route.path,
      route.middlewares ?? [],
      route.action,
    ),
  );

export default tasksRouter;
