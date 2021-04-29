import { ContainerModule, interfaces } from 'inversify';
import { IOC_TYPES } from '../types/ioc.types';
import { Task } from '../../db/models/Task.model';

export const TaskModelModule = new ContainerModule((bind: interfaces.Bind) => {
  bind<any>(IOC_TYPES.Model)
    .toConstantValue(Task);
});
