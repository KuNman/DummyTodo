import { ContainerModule, interfaces } from 'inversify';
import { IOC_TYPES } from '../types/ioc.types';
import { RepositoryInterface } from '../../repositories/Repository.interface';
import TasksRepository from '../../repositories/Tasks.repository';
import { Task } from '../../db/models/Task.model';

export const TasksRepositoryModule = new ContainerModule((bind: interfaces.Bind) => {
  bind<RepositoryInterface<Task>>(IOC_TYPES.TasksRepositorySymbol)
    .to(TasksRepository);
});
