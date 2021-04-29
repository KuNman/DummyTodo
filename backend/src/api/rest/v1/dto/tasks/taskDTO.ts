import { Task } from '../../../../../db/models/Task.model';

export const taskDTO = (task: Task) => ({
  id: task.id,
});
