import { Task, TasksContextType } from '../types';
import { useEffect, useState } from 'react';
import { TasksApi } from '../../api/tasks/tasks.api';

export const useTasksProvider = (): TasksContextType => {
  const [fetchedTasks, setFetchedTasks] = useState<Task[]>([]);

  useEffect(() => {
    !fetchedTasks?.length && get()
  }, [])

  const del = async (id: number) => {
    await TasksApi.delete(id);
    await get();
  }

  const create = async (value: string) => {
    await TasksApi.create({ value });
    await get();
  }

  const get = async () => {
    return TasksApi.get()
      .then((tasks) => setFetchedTasks(tasks))
      .catch((e: Error) => alert(e.message))
  }

  const setIsDone = async (id: number, value: boolean) => {
    await TasksApi.update(id, { isDone: value });
    await get();
  }

  return {
    fetchedTasks,
    del,
    create,
    get,
    setIsDone
  };
};
