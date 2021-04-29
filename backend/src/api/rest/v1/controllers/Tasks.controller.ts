import { Request, Response } from 'express';
import status from 'http-status';
import { tasksContainer } from '../../../../ioc/containers/Tasks.container';
import { IOC_TYPES } from '../../../../ioc/types/ioc.types';
import { RepositoryInterface } from '../../../../repositories/Repository.interface';
import { taskDTO } from '../dto/tasks/taskDTO';
import { tasksDTO } from '../dto/tasks/tasksDTO';
import { Task } from '../../../../db/models/Task.model';

const repository: RepositoryInterface<Task> = tasksContainer()
  .get(IOC_TYPES.TasksRepositorySymbol);

const TasksController = {
  async create(request: Request, response: Response): Promise<Response> {
    const task = await repository.create(request.body);

    return response.status(status.CREATED)
      .json(taskDTO(task));
  },
  async get(request: Request, response: Response): Promise<Response> {
    try {
      const task = await repository.get(Number(request.params.id));

      return response.status(status.OK)
        .json(taskDTO(task));
    } catch (e) {
      return response.status(e.status)
        .json(e);
    }
  },
  async list(request: Request, response: Response): Promise<Response> {
    const tasks = await repository.list();

    return response.status(status.OK)
      .json(tasksDTO(tasks));
  },
  async delete(request: Request, response: Response): Promise<Response> {
    try {
      await repository.delete(Number(request.params.id));

      return response.status(status.NO_CONTENT)
        .json(null);
    } catch (e) {
      return response.status(e.status)
        .json(e);
    }
  },

  async update(request: Request, response: Response): Promise<Response> {
    try {
      const task = await repository.update(Number(request.params.id), request.body);

      return response.status(status.OK)
        .json(task);
    } catch (e) {
      return response.status(e.status)
        .json(e);
    }
  },
};

export default TasksController;
