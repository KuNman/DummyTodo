import { Task } from '../../../../../db/models/Task.model';

export const tasksDTO = (tasks: Task[]) => tasks.map((task) => ({
  id: task.id,
  value: task.value,
  isDone: task.isDone,
}));
